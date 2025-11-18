// Funções auxiliares para renderização
function renderAlertBanner(banner) {
    return `
        <div class="warning-box">
            <strong>${banner.title}</strong>
            <p>${banner.message}</p>
        </div>
    `;
}

function renderInfoBox(infoBox) {
    let html = `
        <div class="info-box">
            <div class="info-box-header">
                <h3>${infoBox.title}</h3>
            </div>
            <div class="info-box-content">
    `;
    
    infoBox.data.forEach(item => {
        html += `
            <div class="info-item">
                <span class="info-item-icon icon-activity"></span>
                <div>
                    <div class="info-item-label">${item.label}</div>
                    <div class="info-item-value">${item.value}</div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Renderizadores de páginas específicas
function renderHomePage(data) {
    return `
        <h1 class="page-title">${data.pageTitle}</h1>
        
        <div class="text-content">
            <h2 class="section-title">${data.welcome.title}</h2>
            <p>${data.welcome.description}</p>
        </div>

        <div class="section">
            <h2 class="section-title">${data.about.title}</h2>
            <div class="text-content">
                <p>${data.about.content}</p>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">${data.featuredArticles.title}</h2>
            
            <div class="cards-grid">
                ${data.featuredArticles.articles.map(article => `
                    <div class="card" data-page="${article.id}">
                        <div class="card-category">
                            <span class="icon icon-${article.category.toLowerCase()}"></span>
                            ${article.category.toUpperCase()}
                        </div>
                        <h3 class="card-title">${article.title}</h3>
                        <p class="card-description">${article.description}</p>
                        <div class="card-meta">
                            <span>${article.status || article.biologia || ''}</span>
                            ${article.regeneracao ? `<span>•</span><span style="color: #fca5a5;">Regeneração ${article.regeneracao}</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">${data.characters.title}</h2>
            
            <div class="cards-grid">
                ${data.characters.list.map(char => `
                    <div class="card" data-page="${char.id}">
                        <div class="card-category">
                            <span class="icon icon-user"></span>
                            PERSONAGEM
                        </div>
                        <h3 class="card-title">${char.name}</h3>
                        <p class="card-description">${char.description}</p>
                        <div class="card-meta">
                            <span>${char.age || char.role}</span>
                            <span>•</span>
                            <span>${char.status}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">${data.recentUpdates.title}</h2>
            <div class="text-content">
                <ul style="list-style: none; padding: 0;">
                    ${data.recentUpdates.updates.map(update => `
                        <li style="margin-bottom: 1rem; padding: 1rem; background: rgba(127, 29, 29, 0.2); border-left: 3px solid #ef4444; border-radius: 0.25rem;">
                            <strong style="color: #fca5a5;">${update.page}</strong>
                            <p style="margin: 0.5rem 0 0 0; color: #d1d5db; font-size: 0.9375rem;">${update.description}</p>
                            <small style="color: #9ca3af;">${update.date}</small>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>

        <div class="warning-box">
            <strong style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="icon icon-book"></span>
                Aviso aos Visitantes
            </strong>
            <p>
                Esta wiki contém informações sobre entidades sobrenaturais, práticas ocultas e fenômenos paranormais. O conteúdo é apresentado com propósitos educacionais e de entretenimento. A The Sinister Factory Wiki não é responsável por tentativas de reprodução de rituais ou invocações descritas nesta wiki.
            </p>
        </div>
    `;
}

function renderCultPage(data) {
    return `
        <div class="layout-with-sidebar">
            <div>
                <h1 class="page-title">${data.pageTitle}</h1>
                
                ${renderAlertBanner(data.alertBanner)}
                
                <div class="text-content">
                    <p>${data.introduction}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.beliefs.title}</h2>
                    
                    ${data.beliefs.sections.map(section => `
                        <div class="text-content">
                            <h3 class="section-subtitle">${section.title}</h3>
                            ${section.highlight ? `
                                <div class="highlight-box">
                                    <p>${section.content}</p>
                                </div>
                            ` : `
                                <p>${section.content}</p>
                            `}
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2 class="section-title">${data.practices.title}</h2>
                    <div class="text-content">
                        <p>${data.practices.intro}</p>
                        
                        ${data.practices.rituals.map(ritual => `
                            <div style="margin: 1.5rem 0;">
                                <h4 style="color: #fca5a5; font-size: 1.125rem; margin-bottom: 0.5rem;">${ritual.title}</h4>
                                <p>${ritual.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.hierarchy.title}</h2>
                    <div class="text-content">
                        <p>${data.hierarchy.intro}</p>
                        
                        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                            ${data.hierarchy.levels.map(level => `
                                <li style="margin-bottom: 1rem; padding: 1rem; background: rgba(127, 29, 29, 0.2); border-left: 3px solid #ef4444; border-radius: 0.25rem;">
                                    <strong style="color: #fca5a5;">${level.name}</strong>
                                    <p style="margin: 0.5rem 0 0 0;">${level.description}</p>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                ${data.finalObjective ? `
                    <div class="section">
                        <h2 class="section-title">${data.finalObjective.title}</h2>
                        <div class="text-content">
                            <div class="highlight-box">
                                <p>${data.finalObjective.content}</p>
                            </div>
                        </div>
                    </div>
                ` : ''}

                <div class="section">
                    <h2 class="section-title">${data.historicalRecords.title}</h2>
                    <div class="text-content">
                        <p>${data.historicalRecords.intro}</p>
                        
                        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                            ${data.historicalRecords.events.map(event => `
                                <li style="margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(0, 0, 0, 0.3); border-left: 2px solid #fca5a5; border-radius: 0.25rem;">
                                    <strong style="color: #fca5a5;">${event.year}:</strong>
                                    <span style="color: #d1d5db; margin-left: 0.5rem;">${event.event}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <aside>
                ${renderInfoBox(data.infoBox)}
            </aside>
        </div>
    `;
}

function renderPlayerPage(data) {
    return `
        <div class="layout-with-sidebar">
            <div>
                <h1 class="page-title">${data.pageTitle}</h1>
                
                ${renderAlertBanner(data.alertBanner)}
                
                <div class="text-content">
                    <p>${data.introduction}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.backgroundAndOrigins.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.backgroundAndOrigins.content}</p>
                        <div class="highlight-box">
                            <p>${data.sections.backgroundAndOrigins.highlight}</p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.psychologicalProfile.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.psychologicalProfile.intro}</p>
                        
                        ${data.sections.psychologicalProfile.traits.map(trait => `
                            <div style="margin: 1.5rem 0;">
                                <h4 style="color: #fca5a5; font-size: 1.125rem; margin-bottom: 0.5rem;">${trait.name}</h4>
                                <p>${trait.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.connectionToTheCult.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.connectionToTheCult.intro}</p>
                        
                        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                            ${data.sections.connectionToTheCult.signs.map(sign => `
                                <li style="margin-bottom: 1rem; padding-left: 1.5rem; position: relative;">
                                    <span style="position: absolute; left: 0; color: #ef4444;">•</span>
                                    ${sign}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <aside>
                ${renderInfoBox(data.infoBox)}
            </aside>
        </div>
    `;
}

function renderJoaoPage(data) {
    return `
        <div class="layout-with-sidebar">
            <div>
                <h1 class="page-title">${data.pageTitle}</h1>
                
                ${renderAlertBanner(data.alertBanner)}
                
                <div class="text-content">
                    <p>${data.introduction}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.appearanceAndPresence.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.appearanceAndPresence.description}</p>
                        
                        ${data.sections.appearanceAndPresence.traits.map(trait => `
                            <div style="margin: 1.5rem 0;">
                                <h4 style="color: #fca5a5; font-size: 1.125rem; margin-bottom: 0.5rem;">${trait.feature}</h4>
                                <p>${trait.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.psychologicalProfile.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.psychologicalProfile.intro}</p>
                        
                        ${data.sections.psychologicalProfile.traits.map(trait => `
                            <div style="margin: 1.5rem 0;">
                                <h4 style="color: #fca5a5; font-size: 1.125rem; margin-bottom: 0.5rem;">${trait.name}</h4>
                                <p>${trait.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.roleInTheCult.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.roleInTheCult.intro}</p>
                        
                        ${data.sections.roleInTheCult.responsibilities.map(resp => `
                            <div style="margin: 1.5rem 0;">
                                <h4 style="color: #fca5a5; font-size: 1.125rem; margin-bottom: 0.5rem;">${resp.title}</h4>
                                <p>${resp.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <aside>
                ${renderInfoBox(data.infoBox)}
            </aside>
        </div>
    `;
}

function renderCreaturesPage(data) {
    return `
        <div class="layout-with-sidebar">
            <div>
                <h1 class="page-title">${data.pageTitle}</h1>
                
                ${renderAlertBanner(data.alertBanner)}
                
                <div class="text-content">
                    <p>${data.introduction}</p>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.origin.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.origin.content}</p>
                        <div class="highlight-box">
                            <p>${data.sections.origin.highlight}</p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.physicalStructure.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.physicalStructure.intro}</p>
                        
                        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                            ${data.sections.physicalStructure.characteristics.map(char => `
                                <li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
                                    <span style="position: absolute; left: 0; color: #ef4444;">•</span>
                                    ${char}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.regeneration.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.regeneration.content}</p>
                        
                        <div class="warning-box" style="margin-top: 1.5rem;">
                            <strong>${data.sections.regeneration.warning.title}</strong>
                            <p>${data.sections.regeneration.warning.text}</p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">${data.sections.habitat.title}</h2>
                    <div class="text-content">
                        <p>${data.sections.habitat.intro}</p>
                        
                        <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
                            ${data.sections.habitat.locations.map(loc => `
                                <li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
                                    <span style="position: absolute; left: 0; color: #ef4444;">•</span>
                                    ${loc}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <aside>
                ${renderInfoBox(data.infoBox)}
            </aside>
        </div>
    `;
}

function renderCreatureTypesPage(data) {
    return `
        <h1 class="page-title">${data.pageTitle}</h1>
        
        <div class="text-content">
            <p>${data.introduction}</p>
        </div>

        ${data.creatures.map(creature => `
            <div class="section">
                <h2 class="section-title">${creature.name}</h2>
                
                <div style="display: inline-block; padding: 0.5rem 1rem; background: ${
                    creature.threatLevel === 'Extremo' ? 'rgba(239, 67, 67, 0.3)' :
                    creature.threatLevel === 'Alto' ? 'rgba(251, 146, 60, 0.3)' :
                    'rgba(234, 179, 8, 0.3)'
                }; border-radius: 0.375rem; margin-bottom: 1.5rem;">
                    <strong style="color: ${
                        creature.threatLevel === 'Extremo' ? '#fca5a5' :
                        creature.threatLevel === 'Alto' ? '#fdba74' :
                        '#fde047'
                    };">Nível de Ameaça: ${creature.threatLevel}</strong>
                </div>
                
                <div class="text-content">
                    <h3 class="section-subtitle">Aparência</h3>
                    <p>${creature.appearance}</p>
                    
                    <h3 class="section-subtitle">Habitat</h3>
                    <p>${creature.habitat}</p>
                    
                    <h3 class="section-subtitle">Comportamento</h3>
                    <p>${creature.behavior}</p>
                    
                    <h3 class="section-subtitle">Vulnerabilidades</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${creature.vulnerabilities.map(vuln => `
                            <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                                <span style="position: absolute; left: 0; color: #ef4444;">•</span>
                                ${vuln}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('')}
    `;
}

function renderTeamPage(data) {
    return `
        <h1 class="page-title">${data.pageTitle}</h1>
        
        <div class="text-content">
            <p>${data.introduction}</p>
        </div>

        <div class="section">
            <h2 class="section-title">Membros da Equipe</h2>

            <div style="display: grid; gap: 1.5rem;">
                ${data.members.map(member => `
                    <div style="background: rgba(127, 29, 29, 0.2); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 0.5rem; padding: 1.5rem;">
                        
                        <h3 style="color: #fca5a5; font-size: 1.5rem; margin-bottom: 0.5rem;">${member.name}</h3>
                        <p style="color: #fdba74; font-size: 1.125rem; margin-bottom: 1rem; font-style: italic;">${member.role}</p>

                        ${member.description ? `
                            <p style="color: #fff; margin-bottom: .5rem;">RA: ${member.ra}</p>
                            <p style="color: #d1d5db; margin-bottom: 1rem; line-height: 1.6;">${member.description}</p>
                        ` : ''}

                        ${member.contact && member.contact.email ? `
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(239, 68, 68, 0.2);">
                                <a href="mailto:${member.contact.email.trim()}"
                                   style="color: #fca5a5; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; transition: color 0.2s;"
                                   onmouseover="this.style.color='#ef4444'"
                                   onmouseout="this.style.color='#fca5a5'">

                                    <span style="font-size: 1.25rem;">✉</span>
                                    <span>Email: ${member.contact.email.trim()}</span>

                                </a>
                            </div>
                        ` : ''}

                    </div>
                `).join('')}
            </div>
        </div>

        <div class="warning-box" style="margin-top: 2rem;">
            <strong>Quer fazer parte do projeto?</strong>
            <p>
                Se você deseja contribuir com a The Sinister Factory Wiki, seja com conteúdo, design ou desenvolvimento, entre em contato com a equipe através dos canais de comunicação listados acima.
            </p>
        </div>
    `;
}

// Função principal para carregar páginas
function loadPage(pageName) {
    // Converter de kebab-case para camelCase se necessário
    const pageKey = pageName === 'creature-types' ? 'creatureTypes' : pageName;
    const data = WIKI_DATA[pageKey];
    
    if (!data) {
        console.error(`Página não encontrada: ${pageName}`);
        return;
    }
    
    const content = document.getElementById('main-content');
    let html = '';
    
    switch(pageKey) {
        case 'home':
            html = renderHomePage(data);
            break;
        case 'cult':
            html = renderCultPage(data);
            break;
        case 'player':
            html = renderPlayerPage(data);
            break;
        case 'joao':
            html = renderJoaoPage(data);
            break;
        case 'creatures':
            html = renderCreaturesPage(data);
            break;
        case 'creatureTypes':
            html = renderCreatureTypesPage(data);
            break;
        case 'team':
            html = renderTeamPage(data);
            break;
    }
    
    content.innerHTML = html;
    
    // Atualizar link ativo na navegação
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Adicionar event listeners para cards clicáveis
    document.querySelectorAll('.card[data-page]').forEach(card => {
        card.addEventListener('click', () => {
            loadPage(card.dataset.page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Salvar página atual no localStorage
    localStorage.setItem('currentPage', pageName);
}

// Função de busca
function searchWiki(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }
    
    query = query.toLowerCase().trim();
    const results = [];
    
    // Buscar em todas as páginas
    Object.keys(WIKI_DATA).forEach(pageKey => {
        const pageData = WIKI_DATA[pageKey];
        const pageTitle = pageData.pageTitle || '';
        
        // Mapear chaves para nomes de página corretos
        const pageNameMap = {
            'home': 'home',
            'cult': 'cult',
            'player': 'player',
            'joao': 'joao',
            'creatures': 'creatures',
            'creatureTypes': 'creature-types',
            'team': 'team'
        };
        
        // Buscar no título
        if (pageTitle.toLowerCase().includes(query)) {
            results.push({
                page: pageNameMap[pageKey] || pageKey,
                title: pageTitle,
                match: 'Título da página',
                relevance: 10
            });
        }
        
        // Buscar na introdução
        if (pageData.introduction && pageData.introduction.toLowerCase().includes(query)) {
            results.push({
                page: pageNameMap[pageKey] || pageKey,
                title: pageTitle,
                match: 'Introdução',
                snippet: getSnippet(pageData.introduction, query),
                relevance: 5
            });
        }
        
        // Buscar em seções específicas
        if (pageData.sections) {
            Object.values(pageData.sections).forEach(section => {
                if (section.title && section.title.toLowerCase().includes(query)) {
                    results.push({
                        page: pageNameMap[pageKey] || pageKey,
                        title: pageTitle,
                        match: section.title,
                        relevance: 7
                    });
                }
            });
        }
        
        // Buscar em crenças/beliefs
        if (pageData.beliefs && pageData.beliefs.sections) {
            pageData.beliefs.sections.forEach(section => {
                if (section.title && section.title.toLowerCase().includes(query)) {
                    results.push({
                        page: pageNameMap[pageKey] || pageKey,
                        title: pageTitle,
                        match: section.title,
                        relevance: 6
                    });
                }
            });
        }
        
        // Buscar em personagens
        if (pageData.characters && pageData.characters.list) {
            pageData.characters.list.forEach(char => {
                if (char.name && char.name.toLowerCase().includes(query)) {
                    results.push({
                        page: pageNameMap[pageKey] || pageKey,
                        title: char.name,
                        match: 'Personagem',
                        relevance: 8
                    });
                }
            });
        }
        
        // Buscar em criaturas
        if (pageData.creatures) {
            pageData.creatures.forEach(creature => {
                if (creature.name && creature.name.toLowerCase().includes(query)) {
                    results.push({
                        page: pageNameMap[pageKey] || pageKey,
                        title: creature.name,
                        match: 'Criatura',
                        relevance: 8
                    });
                }
            });
        }
        
        // Buscar em integrantes
        if (pageData.members) {
            pageData.members.forEach(member => {
                if (member.name && member.name.toLowerCase().includes(query)) {
                    results.push({
                        page: pageNameMap[pageKey] || pageKey,
                        title: member.name,
                        match: 'Integrante',
                        relevance: 7
                    });
                }
            });
        }
    });
    
    // Ordenar por relevância
    return results.sort((a, b) => b.relevance - a.relevance);
}

function getSnippet(text, query, maxLength = 150) {
    const lowerText = text.toLowerCase();
    const index = lowerText.indexOf(query.toLowerCase());
    
    if (index === -1) return text.substring(0, maxLength) + '...';
    
    const start = Math.max(0, index - 50);
    const end = Math.min(text.length, index + query.length + 100);
    
    let snippet = text.substring(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';
    
    return snippet;
}

function displaySearchResults(results, query) {
    const content = document.getElementById('main-content');
    
    if (results.length === 0) {
        content.innerHTML = `
            <div class="text-content">
                <h1 class="page-title">Resultados da Busca</h1>
                <p>Nenhum resultado encontrado para "<strong>${query}</strong>"</p>
                <p style="margin-top: 1rem;">Tente usar termos diferentes ou buscar por:</p>
                <ul style="margin-top: 1rem;">
                    <li>Nomes de personagens (Player, João)</li>
                    <li>Entidades (Culto da Fenda, Entidades Fungoides)</li>
                    <li>Tipos de criaturas (Protoformas, Cardioide, etc.)</li>
                </ul>
            </div>
        `;
        return;
    }
    
    content.innerHTML = `
        <div class="text-content">
            <h1 class="page-title">Resultados da Busca</h1>
            <p style="margin-bottom: 2rem;">Encontrados <strong>${results.length}</strong> resultado(s) para "<strong>${query}</strong>"</p>
            
            <div style="display: grid; gap: 1rem;">
                ${results.map(result => `
                    <div class="card" data-page="${result.page}" style="cursor: pointer;">
                        <h3 class="card-title">${result.title}</h3>
                        <div class="card-meta">
                            <span style="color: #fdba74;">${result.match}</span>
                        </div>
                        ${result.snippet ? `
                            <p class="card-description">${result.snippet}</p>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Adicionar event listeners para os resultados
    document.querySelectorAll('.card[data-page]').forEach(card => {
        card.addEventListener('click', () => {
            loadPage(card.dataset.page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Event listeners para navegação
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar event listeners para links de navegação
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.dataset.page;
            loadPage(pageName);
        });
    });
    
    // Implementar busca
    const searchBox = document.querySelector('.search-box');
    let searchTimeout;
    
    searchBox.addEventListener('input', (e) => {
        const query = e.target.value;
        
        // Debounce: esperar 500ms após parar de digitar
        clearTimeout(searchTimeout);
        
        if (query.trim().length >= 2) {
            searchTimeout = setTimeout(() => {
                const results = searchWiki(query);
                displaySearchResults(results, query);
            }, 500);
        } else if (query.trim().length === 0) {
            // Se apagar a busca, voltar para home
            loadPage('home');
        }
    });
    
    // Buscar ao pressionar Enter
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = e.target.value;
            if (query.trim().length >= 2) {
                const results = searchWiki(query);
                displaySearchResults(results, query);
            }
        }
    });
    
    // Carregar última página visitada ou home
    const lastPage = localStorage.getItem('currentPage') || 'home';
    loadPage(lastPage);
});