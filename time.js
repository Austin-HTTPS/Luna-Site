  dateTime();

  function dateTime() {
    const d = new Date();
    const date = d.toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = d.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    document.getElementById("date-time").innerHTML = `${date} • ${time}`;
  }

  setInterval(dateTime, 1000);