document.addEventListener('DOMContentLoaded', function () {
    const mobilePriceNav = document.querySelector('.mobile-price-navigation');
    const tableBody = document.querySelector('.tbody-pricing-table');

    if (mobilePriceNav) {
        const buttons = mobilePriceNav.querySelectorAll('button');
        const tables = tableBody.querySelectorAll('tr');
        tables.forEach((table) => {
            const tableTd = table.querySelectorAll('td');
            tableTd.forEach((td, index) => {
                if (index === 1) {
                    td.classList.add('default');
                }
            })
        })
        // console.log('tables',tables);
        buttons.forEach((button, index) => {
            button.addEventListener('click', function () {
                const number = index + 1;
                // Remove active class from all buttons
                buttons.forEach(btn =>
                    btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                tables.forEach(table => {
                    const tableTd = table.querySelectorAll('td');
                    tableTd.forEach((td, index) => {
                        if (index === number) {
                            td.classList.add('default');
                        } else {
                            td.classList.remove('default');
                        }
                    })
                });
            });
        });
    }
});
