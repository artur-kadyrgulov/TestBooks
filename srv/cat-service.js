const cds = require("@sap/cds");
module.exports = cds.service.impl(function () {
    const { Books } = this.entities();

    this.after("each", Books, (row) => {
        console.log(`Read Books: ${row.ID}`);
    });

    this.after(["CREATE", "UPDATE", "DELETE"], [Books], async (po, req) => {
        const books_head = req.data;
        req.on("succeeded", () => {
            global.it || console.log(`< emitting: poChanged ${books_head.ID}`);
            this.emit("booksChange", books_head);
        });
    });
});