let tickets = 10;
let users = [];

function getTicket(ticket) {
  return new Promise((resolve) => {
    console.log("Buying a ticket");
    setTimeout(() => {
      if (tickets - ticket > 0) {
        tickets -= ticket;
        console.log("Has bought a ticket");
      } else {
        console.log("There are not more tickets for that quantity");
      }
      resolve();
    }, Math.random() * 5000);
  });
}

function buyTicket(ticket) {
  users.push(ticket);
  if (users.length === 1) {
    buyTickets();
  }
}

async function buyTickets() {
  while (users.length > 0) {
    await getTicket(users[0]);
    users.shift();
  }
}
