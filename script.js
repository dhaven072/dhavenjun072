function showTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-contents');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab links
    const tabs = document.querySelectorAll('.tab-links');
    tabs.forEach(tab => {
        tab.classList.remove('active-link');
    });

    // Show the clicked tab content and set its tab link active
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.tab-links[onclick="showTab('${tabName}')"]`).classList.add('active-link');
}
