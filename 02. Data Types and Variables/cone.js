function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let lateralSurface = Math.PI * radius * slantHeight;
    let baseSurface = Math.PI * Math.pow(radius, 2);
    let area = lateralSurface + baseSurface;
    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`);
}
cone(3,
    5
)