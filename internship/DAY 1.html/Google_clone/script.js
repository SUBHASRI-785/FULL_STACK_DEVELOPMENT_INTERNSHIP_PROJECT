const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // prevent page reload
    const query = input.value.trim();
    if (query.length === 0) return;

    // redirect to real Google search
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
});

// Optional: "I'm Feeling Lucky" button
function lucky() {
    const query = input.value.trim();
    if (query.length === 0) return;

    // Use Google "I'm Feeling Lucky"
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
}
