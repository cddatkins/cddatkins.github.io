const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');
// Apply saved theme or system preference
function applyTheme() 
{
    if (currentTheme === 'dark') 
    {
        body.classList.add('dark');
    } 
    else if (currentTheme === 'light') 
    {
        body.classList.remove('dark');
    } 
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) 
    {
        body.classList.add('dark');
    } 
    else 
    {
        body.classList.remove('dark');
    }
}
applyTheme();

toggle.addEventListener('click', 
    () => {
        body.classList.toggle('dark');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });