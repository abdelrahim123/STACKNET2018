document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';  
});
document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .6)), url(images/photo-1517245386807-bb43f82c33c4.jpg) center no-repeat; background-size: cover';
});
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-wrapper').classList.toggle('change');
});
































