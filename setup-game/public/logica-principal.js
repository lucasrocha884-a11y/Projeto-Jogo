// ==================== MAIN APPLICATION ====================
class SinistreFactory {
    constructor() {
        this.gameState = new GameState();
        this.currentScreen = 'menu';
        this.app = document.getElementById('app');
        
        // Estado da narrativa
        this.currentParagraphIndex = 0;
        this.displayedText = '';
        this.isTyping = false;
        this.typingInterval = null;
        
        // QTE
        this.qteActive = false;
        this.qteTimer = null;
        
        this.init();
    }

    init() {
        this.showMenu();
    }

    // ==================== RENDERIZAÇÃO DE TELAS ====================
    showMenu() {
        this.currentScreen = 'menu';
        this.app.innerHTML = `
            <div class="menu-container">
                <div class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1667664470941-83b905a7bbb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080');"></div>
                <div class="overlay-dark"></div>
                <div class="overlay-vignette"></div>
                
                <div class="particles" id="particles"></div>
                
                <div class="menu-content">
                    <div class="menu-header">
                        <div class="menu-logo">
                            <img src="../assets/logo.png" alt="The Sinistre Factory" class="menu-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        </div>
                        <h1 class="menu-title">THE SINISTRE</h1>
                        <h1 class="menu-title">FACTORY</h1>
                        <p class="menu-subtitle">A ESCURIDÃO AGUARDA</p>
                    </div>
                    
                    <div class="menu-buttons">
                        <button class="menu-button" onclick="app.startNewGame()">
                            <span class="corner-tl"></span>
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <span class="corner-br"></span>
                            <span>▶</span> NOVO JOGO
                        </button>
                        <button class="menu-button" onclick="app.showAchievements()">
                            <span class="corner-tl"></span>
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <span class="corner-br"></span>
                            <span>🏆</span> CONQUISTAS
                        </button>
                        <button class="menu-button" onclick="app.showSettings()">
                            <span class="corner-tl"></span>
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <span class="corner-br"></span>
                            <span>⚙</span> CONFIGURAÇÕES
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        this.createParticles('particles');
    }

    showGame() {
        this.currentScreen = 'game';
        const scene = this.gameState.getCurrentScene();
        
        this.app.innerHTML = `
            <div class="game-container">
                <div class="bg-image" style="background-image: url('https://images.unsplash.com/photo-1564329471042-7b3bfa3c51c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080');"></div>
                <div class="overlay-game"></div>
                <div class="overlay-vignette"></div>
                
                <div class="particles" id="game-particles"></div>
                
                <div class="game-hud">
                    <button class="hud-button" onclick="app.returnToMenu()">
                        <span>←</span> MENU
                    </button>
                    <button class="hud-button" onclick="app.saveGame()">
                        <span>💾</span> SALVAR
                    </button>
                </div>
                
                <div class="game-content">
                    ${scene.title ? `
                    <div class="chapter-title fade-in">
                        <div class="chapter-title-box">
                            <span class="corner-tl"></span>
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <span class="corner-br"></span>
                            <h2 class="chapter-title-text">Capítulo 1 - A Mensagem Perdida</h2>
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="game-main">
                        <div class="narrative-box" id="narrativeBox" onclick="app.handleNarrativeClick()">
                            <span class="corner-tl"></span>
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <span class="corner-br"></span>
                            <div class="narrative-text" id="narrativeText"></div>
                            <p class="narrative-hint left hidden" id="skipHint">Clique para pular</p>
                            <p class="narrative-hint right hidden" id="continueHint">
                                Clique para continuar ▼
                            </p>
                        </div>
                        
                        <div id="actionContainer"></div>
                    </div>
                </div>
            </div>
        `;
        
        this.createParticles('game-particles');
        this.startNarrative();
    }

    showEnding(ending, sceneId) {
        const endingType = ending.type;
        let titleClass = endingType;
        let symbol = '';
        let dividerColor = '';
        
        switch (endingType) {
            case 'death':
                symbol = '☠';
                dividerColor = 'var(--red-900)';
                break;
            case 'good':
                symbol = '✓';
                dividerColor = 'var(--green-600)';
                break;
            case 'bad':
                symbol = '⚠';
                dividerColor = 'var(--orange-600)';
                break;
            case 'secret':
                symbol = '👁';
                dividerColor = 'var(--purple-600)';
                break;
        }
        
        this.app.innerHTML = `
            <div class="ending-container">
                <div class="overlay-vignette"></div>
                
                <div class="particles" id="ending-particles"></div>
                
                <div class="ending-content">
                    <h1 class="ending-title ${titleClass}">${ending.title}</h1>
                    
                    <div class="ending-divider" style="color: ${dividerColor};">
                        <div class="ending-divider-line" style="background: ${dividerColor};"></div>
                        <span>${symbol}</span>
                        <div class="ending-divider-line" style="background: ${dividerColor};"></div>
                    </div>
                    
                    <div class="ending-message-box">
                        <span class="corner-tl"></span>
                        <span class="corner-tr"></span>
                        <span class="corner-bl"></span>
                        <span class="corner-br"></span>
                        <p class="ending-message">${ending.message}</p>
                    </div>
                    
                    <div class="ending-buttons">
                        <button class="ending-button primary" onclick="app.startNewGame()">
                            <span>🔄</span> Recomeçar
                        </button>
                        <button class="ending-button secondary" onclick="app.returnToMenu()">
                            <span>🏠</span> Menu Principal
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        this.createParticles('ending-particles');
        
        // Desbloquear conquista
        const achievementId = ENDING_ACHIEVEMENTS[sceneId];
        if (achievementId) {
            const isNew = this.gameState.unlockAchievement(achievementId);
            if (isNew) {
                setTimeout(() => this.showAchievementNotification(achievementId), 1500);
            }
        }
        
        // Limpar save
        this.gameState.clearSave();
    }

    showAchievements() {
        this.currentScreen = 'achievements';
        const achievements = this.gameState.achievements;
    
        const achievementCards = achievements.map(a => `
            <div class="achievement-card ${a.unlocked ? 'unlocked' : 'locked'}">
                <span class="corner-tl"></span>
                <span class="corner-tr"></span>
                <span class="corner-bl"></span>
                <span class="corner-br"></span>
                <div class="achievement-card-content">
                    <div class="achievement-card-icon">${a.unlocked ? a.title.split(' ')[0] : '🔒'}</div>
                    <div>
                        <div class="achievement-card-title">${a.unlocked ? a.title : '???'}</div>
                        <p class="achievement-card-desc">${a.unlocked ? a.description : 'Conquista bloqueada'}</p>
                    </div>
                </div>
            </div>
        `).join('');

    this.app.innerHTML = `
        <div class="achievements-container">
            <div class="achievements-bg-image" style="background-image: url('../assets/fundo.png');"></div>
            
            <div class="particles" id="achievements-particles"></div>
            
            <div class="achievements-content">
                <div class="achievements-header">
                    <div class="achievements-header-image">
                        <img src="../assets/achievements-header.png" alt="Conquistas" class="achievements-logo" onerror="this.style.display='none';">
                    </div>
                    <h1 class="achievements-title">CONQUISTAS</h1>
                </div>
                
                <div class="achievements-grid">
                    ${achievementCards}
                </div>
                
                <button class="menu-button" onclick="app.showMenu()">
                    <span class="corner-tl"></span>
                    <span class="corner-tr"></span>
                    <span class="corner-bl"></span>
                    <span class="corner-br"></span>
                    <span>←</span> VOLTAR AO MENU
                </button>
            </div>
        </div>
    `;
    
    this.createParticles('achievements-particles');
    }

    showSettings() {
        this.currentScreen = 'settings';
        const s = this.gameState.settings;
        
        this.app.innerHTML = `
            <div class="settings-container">
                <div class="overlay-dark"></div>
                <div class="particles" id="settings-particles"></div>
                
                <div class="settings-content">
                    <div class="settings-header">
                        <h1 class="settings-title">CONFIGURAÇÕES</h1>
                        <p class="settings-subtitle">Ajuste as configurações do jogo conforme sua preferência</p>
                    </div>
                    
                    <div class="settings-sections">
                        <!-- ÁUDIO -->
                        <div class="settings-section">
                            <h3 class="settings-section-title">ÁUDIO</h3>
                            
                            <div class="settings-row">
                                <div class="settings-label">
                                    <span class="settings-icon">${s.isMuted ? '🔇' : '🔊'}</span>
                                    <span>Silenciar Som</span>
                                </div>
                                <label class="toggle">
                                    <input type="checkbox" id="muteToggle" ${s.isMuted ? 'checked' : ''} onchange="app.updateSetting('isMuted', this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            
                            <div class="settings-row">
                                <div class="settings-label">
                                    <span>Volume Geral</span>
                                    <span class="settings-value" id="volumeValue">${s.volume}%</span>
                                </div>
                            </div>
                            <input type="range" class="slider" id="volumeSlider" min="0" max="100" value="${s.volume}" ${s.isMuted ? 'disabled' : ''} oninput="app.updateVolumeDisplay(this.value)" onchange="app.updateSetting('volume', parseInt(this.value))">
                        </div>
                        
                        <!-- TEXTO E DIÁLOGO -->
                        <div class="settings-section">
                            <h3 class="settings-section-title">TEXTO E DIÁLOGO</h3>
                            
                            <div class="settings-row">
                                <div class="settings-label">
                                    <span class="settings-icon">⌨</span>
                                    <span>Velocidade do Texto</span>
                                    <span class="settings-value" id="speedValue">${s.textSpeed < 30 ? 'Lento' : s.textSpeed < 70 ? 'Normal' : 'Rápido'}</span>
                                </div>
                            </div>
                            <input type="range" class="slider" id="speedSlider" min="0" max="100" value="${s.textSpeed}" oninput="app.updateSpeedDisplay(this.value)" onchange="app.updateSetting('textSpeed', parseInt(this.value))">
                            <p class="settings-hint">Controla a velocidade de digitação do texto nos diálogos</p>
                            
                            <div class="settings-row">
                                <div class="settings-label-group">
                                    <span class="settings-label">Pular Texto Lido</span>
                                    <p class="settings-hint">Pula automaticamente diálogos já lidos</p>
                                </div>
                                <label class="toggle">
                                    <input type="checkbox" id="skipToggle" ${s.skipRead ? 'checked' : ''} onchange="app.updateSetting('skipRead', this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                        
                        <!-- GAMEPLAY -->
                        <div class="settings-section">
                            <h3 class="settings-section-title">GAMEPLAY</h3>
                            
                            <div class="settings-row">
                                <div class="settings-label-group">
                                    <span class="settings-label">Efeito de Tremor</span>
                                    <p class="settings-hint">Ativa tremor de tela em momentos intensos</p>
                                </div>
                                <label class="toggle">
                                    <input type="checkbox" id="shakeToggle" ${s.screenshake ? 'checked' : ''} onchange="app.updateSetting('screenshake', this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            
                            <div class="settings-row">
                                <div class="settings-label-group">
                                    <span class="settings-label">Salvamento Automático</span>
                                    <p class="settings-hint">Salva o progresso automaticamente</p>
                                </div>
                                <label class="toggle">
                                    <input type="checkbox" id="autoSaveToggle" ${s.autoSave ? 'checked' : ''} onchange="app.updateSetting('autoSave', this.checked)">
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <button class="menu-button" onclick="app.showMenu()">
                        <span class="corner-tl"></span>
                        <span class="corner-tr"></span>
                        <span class="corner-bl"></span>
                        <span class="corner-br"></span>
                        <span>←</span> VOLTAR AO MENU
                    </button>
                </div>
            </div>
        `;
        
        this.createParticles('settings-particles');
    }

    updateSetting(key, value) {
        this.gameState.updateSettings({ [key]: value });
        
        // Atualizar UI se necessário
        if (key === 'isMuted') {
            const volumeSlider = document.getElementById('volumeSlider');
            if (volumeSlider) {
                volumeSlider.disabled = value;
            }
        }
    }

    updateVolumeDisplay(value) {
        const display = document.getElementById('volumeValue');
        if (display) {
            display.textContent = value + '%';
        }
    }

    updateSpeedDisplay(value) {
        const display = document.getElementById('speedValue');
        if (display) {
            let text = 'Normal';
            if (value < 30) text = 'Lento';
            else if (value >= 70) text = 'Rápido';
            display.textContent = text;
        }
    }

    // ==================== AÇÕES DO JOGO ====================
    startNewGame() {
        this.gameState.resetGame();
        this.showGame();
    }

    returnToMenu() {
        this.showMenu();
    }

    saveGame() {
        this.gameState.saveGame();
        this.showNotification('Jogo salvo!');
    }

    // ==================== SISTEMA DE NARRATIVA ====================
    startNarrative() {
        const scene = this.gameState.getCurrentScene();
        this.currentParagraphIndex = 0;
        this.displayedText = '';
        this.typeText();
    }

    typeText() {
        const scene = this.gameState.getCurrentScene();
        const paragraph = scene.text[this.currentParagraphIndex];
        
        if (!paragraph) return;
        
        this.isTyping = true;
        document.getElementById('skipHint')?.classList.remove('hidden');
        
        const baseDelay = 50;
        const speedMultiplier = (100 - this.gameState.settings.textSpeed) / 100;
        const delay = Math.max(5, baseDelay * speedMultiplier);
        
        let charIndex = 0;
        
        const type = () => {
            if (charIndex < paragraph.length) {
                this.displayedText = paragraph.substring(0, charIndex + 1);
                const textEl = document.getElementById('narrativeText');
                if (textEl) {
                    textEl.innerHTML = this.displayedText + '<span class="typing-cursor"></span>';
                }
                charIndex++;
                this.typingInterval = setTimeout(type, delay);
            } else {
                this.finishTyping();
            }
        };
        
        type();
    }

    finishTyping() {
        this.isTyping = false;
        const textEl = document.getElementById('narrativeText');
        if (textEl) {
            textEl.innerHTML = this.displayedText;
        }
        
        document.getElementById('skipHint')?.classList.add('hidden');
        
        const scene = this.gameState.getCurrentScene();
        
        if (this.currentParagraphIndex < scene.text.length - 1) {
            // Ainda há mais parágrafos
            document.getElementById('continueHint')?.classList.remove('hidden');
        } else {
            // Último parágrafo completo
            document.getElementById('continueHint')?.classList.add('hidden');
            this.showActions();
        }
    }

    handleNarrativeClick() {
        if (this.isTyping) {
            // Pular animação de digitação
            clearTimeout(this.typingInterval);
            const scene = this.gameState.getCurrentScene();
            this.displayedText = scene.text[this.currentParagraphIndex];
            this.finishTyping();
        } else {
            // Avançar para próximo parágrafo
            const scene = this.gameState.getCurrentScene();
            if (this.currentParagraphIndex < scene.text.length - 1) {
                this.currentParagraphIndex++;
                this.displayedText = '';
                document.getElementById('continueHint')?.classList.add('hidden');
                this.typeText();
            }
        }
    }

    // ==================== AÇÕES (ESCOLHAS/QTE/CONTINUAR) ====================
    showActions() {
        const scene = this.gameState.getCurrentScene();
        const container = document.getElementById('actionContainer');
        
        if (!container) return;
        
        if (scene.ending) {
            // Mostrar tela de final
            setTimeout(() => {
                this.showEnding(scene.ending, scene.id);
            }, 1000);
        } else if (scene.qte) {
            // Mostrar QTE
            this.showQTE(scene.qte);
        } else if (scene.choices) {
            // Mostrar escolhas
            this.showChoices(scene.choices);
        } else if (scene.nextScene) {
            // Botão continuar
            container.innerHTML = `
                <button class="menu-button" onclick="app.goToNextScene()">
                    Continuar →
                </button>
            `;
        }
    }

    showChoices(choices) {
        const container = document.getElementById('actionContainer');
        if (!container) return;
        
        const html = `
            <div class="choices-container" id="choicesContainer">
                ${choices.map(choice => `
                    <button class="choice-button" onclick="app.selectChoice('${choice.nextScene}')" ${choice.disabled ? 'disabled' : ''}>
                        <span class="corner-tl"></span>
                        <span class="corner-tr"></span>
                        <span class="corner-bl"></span>
                        <span class="corner-br"></span>
                        <span class="choice-text">${choice.text}</span>
                        <span class="choice-icon">→</span>
                    </button>
                `).join('')}
            </div>
        `;
        
        container.innerHTML = html;
        
        // Scroll suave até as escolhas
        setTimeout(() => {
            const choicesEl = document.getElementById('choicesContainer');
            if (choicesEl) {
                choicesEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    selectChoice(nextScene) {
        this.gameState.goToScene(nextScene);
        this.showGame();
    }

    goToNextScene() {
        const scene = this.gameState.getCurrentScene();
        if (scene.nextScene) {
            this.gameState.goToScene(scene.nextScene);
            this.showGame();
        }
    }

    // ==================== QTE ====================
    showQTE(qte) {
        const container = document.getElementById('actionContainer');
        if (!container) return;
        
        this.qteActive = true;
        const startTime = Date.now();
        
        container.innerHTML = `
            <div class="qte-container">
                <div class="qte-prompt">
                    <span>⚠</span> ${qte.prompt} <span>⚠</span>
                </div>
                
                <button class="qte-button" id="qteButton">
                    CLIQUE OU ESPAÇO
                </button>
                
                <div class="qte-timer">
                    <div class="qte-timer-fill" id="qteTimerFill" style="width: 100%;"></div>
                </div>
                
                <p class="qte-time-text" id="qteTimeText">
                    Rápido! Você tem ${(qte.timeLimit / 1000).toFixed(1)}s restantes!
                </p>
            </div>
        `;
        
        // Timer visual
        const updateTimer = () => {
            if (!this.qteActive) return;
            
            const elapsed = Date.now() - startTime;
            const remaining = qte.timeLimit - elapsed;
            const percentage = Math.max(0, (remaining / qte.timeLimit) * 100);
            
            const fill = document.getElementById('qteTimerFill');
            const timeText = document.getElementById('qteTimeText');
            const button = document.getElementById('qteButton');
            
            if (fill) {
                fill.style.width = percentage + '%';
                if (percentage < 30) {
                    fill.classList.add('warning');
                    button?.classList.add('warning');
                }
            }
            
            if (timeText) {
                timeText.textContent = `Rápido! Você tem ${(remaining / 1000).toFixed(1)}s restantes!`;
            }
            
            if (remaining > 0) {
                requestAnimationFrame(updateTimer);
            } else {
                this.handleQTEResult(false, qte);
            }
        };
        
        updateTimer();
        
        // Event listeners
        const handleSuccess = () => {
            if (this.qteActive) {
                this.handleQTEResult(true, qte);
            }
        };
        
        document.getElementById('qteButton')?.addEventListener('click', handleSuccess);
        
        const handleKeyPress = (e) => {
            if (e.code === 'Space' && this.qteActive) {
                e.preventDefault();
                handleSuccess();
            }
        };
        
        document.addEventListener('keydown', handleKeyPress);
        
        // Limpar event listener quando sair
        this.qteCleanup = () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }

    handleQTEResult(success, qte) {
        this.qteActive = false;
        
        if (this.qteCleanup) {
            this.qteCleanup();
            this.qteCleanup = null;
        }
        
        const button = document.getElementById('qteButton');
        if (button) {
            button.textContent = success ? '✓ SUCESSO' : '✗ FALHOU';
            if (success) {
                button.classList.add('success');
            }
        }
        
        setTimeout(() => {
            const nextScene = success ? qte.successScene : qte.failScene;
            this.gameState.goToScene(nextScene);
            this.showGame();
        }, 1000);
    }

    // ==================== UTILITÁRIOS ====================
    createParticles(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (5 + Math.random() * 10) + 's';
            container.appendChild(particle);
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            background: rgba(127, 29, 29, 0.95);
            border: 2px solid var(--red-600);
            border-radius: 8px;
            padding: 1rem 2rem;
            color: white;
            font-family: 'Bebas Neue', sans-serif;
            animation: fadeIn 0.3s ease-out;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    showAchievementNotification(achievementId) {
        const achievement = this.gameState.achievements.find(a => a.id === achievementId);
        if (!achievement) return;
        
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div>
                <div class="achievement-text-small">Conquista Desbloqueada!</div>
                <div class="achievement-text-large">${achievement.title}</div>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
}

// Inicializar aplicação quando o DOM carregar
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SinistreFactory();
});

// Prevenir zoom em mobile
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());
