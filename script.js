let tickets = 10;

function getTicket(ticket) {
  return new Promise((resolve) => {
    console.log("Buying a ticket");
    setTimeout(() => {
      if (tickets - ticket > 0) {
        tickets - ticket;
        console.log("has bought a ticket");
      } else {
        console.log("There are not more tickets");
      }
      resolve();
    }, Math.random() * 5000);
  });
}
