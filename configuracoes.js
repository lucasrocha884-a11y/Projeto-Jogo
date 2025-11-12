// ==================== GAME STATE MANAGEMENT ====================
class GameState {
    constructor() {
        this.currentScene = 'start';
        this.visitedScenes = [];
        this.choices = [];
        this.achievements = this.loadAchievements();
        this.settings = this.loadSettings();
    }

    // Settings
    loadSettings() {
        const saved = localStorage.getItem('sinistre_settings');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            textSpeed: 50, // 0-100
            volume: 70,
            isMuted: false,
            screenshake: true,
            autoSave: true,
            skipRead: false
        };
    }

    saveSettings() {
        localStorage.setItem('sinistre_settings', JSON.stringify(this.settings));
    }

    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
        this.saveSettings();
    }

    // Achievements
    loadAchievements() {
        const saved = localStorage.getItem('sinistre_achievements');
        if (saved) {
            return JSON.parse(saved);
        }
        return ACHIEVEMENTS.map(a => ({ ...a }));
    }

    saveAchievements() {
        localStorage.setItem('sinistre_achievements', JSON.stringify(this.achievements));
    }

    unlockAchievement(achievementId) {
        const achievement = this.achievements.find(a => a.id === achievementId);
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            this.saveAchievements();
            return true; // Nova conquista
        }
        return false; // Já estava desbloqueada
    }

    // Save/Load
    saveGame() {
        const saveData = {
            currentScene: this.currentScene,
            visitedScenes: this.visitedScenes,
            choices: this.choices,
            timestamp: Date.now()
        };
        localStorage.setItem('sinistre_save', JSON.stringify(saveData));
    }

    loadGame() {
        const saved = localStorage.getItem('sinistre_save');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentScene = data.currentScene;
            this.visitedScenes = data.visitedScenes || [];
            this.choices = data.choices || [];
            return true;
        }
        return false;
    }

    hasSavedGame() {
        return localStorage.getItem('sinistre_save') !== null;
    }

    clearSave() {
        localStorage.removeItem('sinistre_save');
    }

    // Game flow
    resetGame() {
        this.currentScene = 'start';
        this.visitedScenes = [];
        this.choices = [];
        this.clearSave();
    }

    goToScene(sceneId) {
        this.currentScene = sceneId;
        if (!this.visitedScenes.includes(sceneId)) {
            this.visitedScenes.push(sceneId);
        }
        if (this.settings.autoSave) {
            this.saveGame();
        }
    }

    makeChoice(choiceId, nextScene) {
        this.choices.push({ choiceId, nextScene, timestamp: Date.now() });
        this.goToScene(nextScene);
    }

    getCurrentScene() {
        return STORY_DATA[this.currentScene] || STORY_DATA.start;
    }
}
