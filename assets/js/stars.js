class StarSystem {
    constructor() {
        this.container = document.getElementById('stars-container');
        this.stars = [];
        this.starCount = 200;
        this.init();
    }

    init() {
        this.createStars();
        this.startAnimations();
        window.addEventListener('resize', () => this.handleResize());
    }

    createStars() {
        for (let i = 0; i < this.starCount; i++) {
            this.createStar();
        }
    }

    createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const moveX = (Math.random() - 0.5) * 50;
        const moveY = (Math.random() - 0.5) * 30;
        const rotate = (Math.random() - 0.5) * 180;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        
        const colors = [
            '#ffffff',
            '#4fc3f7',
            '#64ffda',
            '#ffd700',
            '#ff6b6b'
        ];
        star.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        star.style.opacity = '0.8';
        star.style.transform = 'scale(1)';
        
        star.style.setProperty('--move-x', `${moveX}px`);
        star.style.setProperty('--move-y', `${moveY}px`);
        star.style.setProperty('--rotate', `${rotate}deg`);
        
        const twinkleDuration = Math.random() * 2 + 2;
        
        const moveDuration = Math.random() * 20 + 30;
        
        star.style.animation = `twinkle ${twinkleDuration}s infinite ease-in-out, moveStar ${moveDuration}s infinite alternate`;
        
        this.container.appendChild(star);
        this.stars.push(star);
    }

    startAnimations() {
        this.stars.forEach(star => {
            star.style.animationPlayState = 'running';
        });
    }

    handleResize() {
        this.stars.forEach(star => star.remove());
        this.stars = [];
        this.createStars();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new StarSystem();
});
