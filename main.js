const points = document.querySelectorAll('.diagram-point');
const tooltip = document.getElementById('tooltip');

points.forEach(point => {
    point.addEventListener('mouseenter', (e) => {
        const text = e.target.getAttribute('data-tooltip');
        tooltip.style.display = 'block';
        tooltip.textContent = text;
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY}px`;
    });

    point.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});

document.addEventListener('mousemove', (e) => {
    if (tooltip.style.display === 'block') {
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY}px`;
    }
});