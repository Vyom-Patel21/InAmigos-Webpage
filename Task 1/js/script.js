const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function()
{
    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active"))
    {
        menuBtn.textContent = "✕";
    }
    else
    {
        menuBtn.textContent = "☰";
    }
});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link)
{
    link.addEventListener("click", function()
    {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .project-card, .purpose-grid, .highlight-card, .involvement-card"
);


const observer = new IntersectionObserver(
    function(entries)
    {
        entries.forEach(function(entry)
        {
            if(entry.isIntersecting)
            {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function(element)
{
    element.classList.add("reveal");
    observer.observe(element);
});