// Menu redirect
// Selecting a dropdown menu item will redirect to the appropriate page.
// Going 'back' on a webpage should reset the dropdown so the previously selected webpage should not be the first item displayed in the dropdown.

function redirectToPage(dropdown) {
    var selectedPage = dropdown.value;
    if (selectedPage !== "Menu") {
        window.location.href = selectedPage;
    }
}

function resetDropdown() {
    document.querySelector(".menu-dropdown").selectedIndex = 0;
}

window.onload = resetDropdown;