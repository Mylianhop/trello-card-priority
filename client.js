/* Card Priority Power-Up v1 */
(function () {
  const PRIORITIES = {
    5: { name: "Low",      color: "blue"   },
    4: { name: "Medium",   color: "green"  },
    3: { name: "High",     color: "yellow" },
    2: { name: "Critical", color: "orange" },
    1: { name: "Highest",  color: "red"    }
  };

  function getPriority(t) {
    return t.get("card", "shared", "priority", null);
  }

  function openPriorityPicker(t) {
    return t.popup({
      title: "Priority",
      items: [
        { text: "🔵 5 — Low", callback: function () { return savePriority(t, 5); } },
        { text: "🟢 4 — Medium", callback: function () { return savePriority(t, 4); } },
        { text: "🟡 3 — High", callback: function () { return savePriority(t, 3); } },
        { text: "🟠 2 — Critical", callback: function () { return savePriority(t, 2); } },
        { text: "🔴 1 — Highest", callback: function () { return savePriority(t, 1); } },
        { text: "Remove priority", callback: function () { return removePriority(t); } }
      ]
    });
  }

  async function savePriority(t, priority) {
    if (!(await t.memberCanWriteToModel("card"))) {
      return t.alert({ message: "You don't have permission to change this card." });
    }

    await t.set("card", "shared", "priority", priority);
    await t.closePopup();
  }

  async function removePriority(t) {
    if (!(await t.memberCanWriteToModel("card"))) {
      return t.alert({ message: "You don't have permission to change this card." });
    }

    await t.set("card", "shared", "priority", null);
    await t.closePopup();
  }

  window.TrelloPowerUp.initialize({
    "card-badges": function (t) {
      return getPriority(t).then(function (priority) {
        const info = PRIORITIES[priority];
        if (!info) return [];

        return [{
          text: String(priority),
          color: info.color
        }];
      });
    },

    "card-buttons": function (t) {
      return [{
        text: "Priority",
        condition: "edit",
        callback: openPriorityPicker
      }];
    }
  });
})();
