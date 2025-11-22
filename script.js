const slides = [
    {
        title: "Introducción",
        content: `
            <p>Bienvenido al tutorial de SQL para la base de datos de <strong>E-Sports</strong>.</p>
            <p>En este tutorial, aprenderás a interactuar con una base de datos relacional diseñada para gestionar torneos de videojuegos, jugadores, equipos y más.</p>
            <p>Usaremos las siguientes tablas principales:</p>
            <ul>
                <li><strong>JUEGO</strong>: Videojuegos disponibles.</li>
                <li><strong>USUARIO</strong>: Jugadores y personal.</li>
                <li><strong>PLATAFORMA</strong>: Consolas y PC.</li>
                <li><strong>EQUIPO_JUEGO</strong>: Equipos formados por jugadores.</li>
            </ul>
        `,
        sql: null,
        result: null
    },
    {
        title: "1. Insert",
        content: `
            <p>La sentencia <code>INSERT</code> se utiliza para agregar nuevos registros a una tabla.</p>
            <p>Vamos a agregar un nuevo juego llamado 'Valorant' a la tabla <code>JUEGO</code>.</p>
        `,
        sql: `INSERT INTO JUEGO (nombre, clasificiacion_ESRB, estudio_dev, plataformas_disponibles, numero_jugadores, tipo, existencias_inventario, PLATAFORMA_id)
VALUES ('Valorant', 'T', 'Riot Games', 'PC', '5v5', 'Shooter', 100, 1);`,
        result: `
            <table>
                <thead>
                    <tr><th>id</th><th>nombre</th><th>clasificacion_ESRB</th><th>estudio_dev</th></tr>
                </thead>
                <tbody>
                    <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                    <tr style="background-color: #e8f5e9;"><td>15</td><td>Valorant</td><td>T</td><td>Riot Games</td></tr>
                </tbody>
            </table>
            <p class="note">El nuevo registro ha sido añadido con éxito.</p>
        `
    },
    {
        title: "2. Alter Table",
        content: `
            <p>La sentencia <code>ALTER TABLE</code> modifica la estructura de una tabla existente.</p>
            <p>Vamos a agregar una columna <code>email</code> a la tabla <code>USUARIO</code>.</p>
        `,
        sql: `ALTER TABLE USUARIO
ADD COLUMN email VARCHAR(100);`,
        result: `
            <p>Estructura de tabla <strong>USUARIO</strong> actualizada:</p>
            <table>
                <thead>
                    <tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th></tr>
                </thead>
                <tbody>
                    <tr><td>id</td><td>int</td><td>NO</td><td>PRI</td></tr>
                    <tr><td>nickname</td><td>varchar(45)</td><td>YES</td><td></td></tr>
                    <tr style="background-color: #e8f5e9;"><td>email</td><td>varchar(100)</td><td>YES</td><td></td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "3. Drop Table",
        content: `
            <p>La sentencia <code>DROP TABLE</code> elimina una tabla y todos sus datos de forma permanente.</p>
            <p>Supongamos que tenemos una tabla temporal llamada <code>LOGS_TEMP</code> que ya no necesitamos.</p>
        `,
        sql: `DROP TABLE LOGS_TEMP;`,
        result: `
            <div class="alert success">
                <span class="material-icons">check_circle</span>
                <span>Tabla LOGS_TEMP eliminada correctamente.</span>
            </div>
        `
    },
    {
        title: "4. Select",
        content: `
            <p>La sentencia <code>SELECT</code> se usa para consultar datos de la base de datos.</p>
            <p>Vamos a listar todos los juegos disponibles.</p>
        `,
        sql: `SELECT nombre, estudio_dev, tipo FROM JUEGO;`,
        result: `
            <table>
                <thead>
                    <tr><th>nombre</th><th>estudio_dev</th><th>tipo</th></tr>
                </thead>
                <tbody>
                    <tr><td>League of Legends</td><td>Riot Games</td><td>MOBA</td></tr>
                    <tr><td>FIFA 24</td><td>EA Sports</td><td>Deportes</td></tr>
                    <tr><td>Call of Duty</td><td>Activision</td><td>Shooter</td></tr>
                    <tr><td>Super Smash Bros</td><td>Nintendo</td><td>Pelea</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "5. Select con WHERE",
        content: `
            <p>La cláusula <code>WHERE</code> filtra los registros que cumplen una condición específica.</p>
            <p>Vamos a buscar solo los juegos de tipo 'Shooter'.</p>
        `,
        sql: `SELECT nombre, estudio_dev FROM JUEGO
WHERE tipo = 'Shooter';`,
        result: `
            <table>
                <thead>
                    <tr><th>nombre</th><th>estudio_dev</th></tr>
                </thead>
                <tbody>
                    <tr><td>Call of Duty</td><td>Activision</td></tr>
                    <tr><td>Valorant</td><td>Riot Games</td></tr>
                    <tr><td>Overwatch 2</td><td>Blizzard</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "6. Group By",
        content: `
            <p>La sentencia <code>GROUP BY</code> agrupa filas que tienen los mismos valores en filas de resumen.</p>
            <p>Contemos cuántos usuarios hay en cada comuna.</p>
        `,
        sql: `SELECT C.COMUNA, COUNT(*) as total_usuarios
FROM USUARIO U
JOIN COMUNA_BARRIO C ON U.COMUNA_BARRIO_id = C.id
GROUP BY C.COMUNA;`,
        result: `
            <table>
                <thead>
                    <tr><th>COMUNA</th><th>total_usuarios</th></tr>
                </thead>
                <tbody>
                    <tr><td>Poblado</td><td>120</td></tr>
                    <tr><td>Laureles</td><td>85</td></tr>
                    <tr><td>Belén</td><td>92</td></tr>
                    <tr><td>Centro</td><td>45</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "7. Alias (AS)",
        content: `
            <p>Los <code>ALIAS</code> se usan para dar a una tabla o columna un nombre temporal más legible.</p>
            <p>Vamos a renombrar las columnas en el resultado para que sean más claras.</p>
        `,
        sql: `SELECT nombre AS 'Nombre del Juego', estudio_dev AS 'Desarrollador'
FROM JUEGO;`,
        result: `
            <table>
                <thead>
                    <tr><th>Nombre del Juego</th><th>Desarrollador</th></tr>
                </thead>
                <tbody>
                    <tr><td>League of Legends</td><td>Riot Games</td></tr>
                    <tr><td>FIFA 24</td><td>EA Sports</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "8. Between",
        content: `
            <p>El operador <code>BETWEEN</code> selecciona valores dentro de un rango dado.</p>
            <p>Busquemos juegos que tengan entre 50 y 100 unidades en inventario.</p>
        `,
        sql: `SELECT nombre, existencias_inventario
FROM JUEGO
WHERE existencias_inventario BETWEEN 50 AND 100;`,
        result: `
            <table>
                <thead>
                    <tr><th>nombre</th><th>existencias_inventario</th></tr>
                </thead>
                <tbody>
                    <tr><td>FIFA 24</td><td>80</td></tr>
                    <tr><td>Valorant</td><td>100</td></tr>
                    <tr><td>Mario Kart</td><td>65</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "9. Min y Max",
        content: `
            <p>Las funciones <code>MIN()</code> y <code>MAX()</code> devuelven el valor más pequeño y más grande de la columna seleccionada.</p>
            <p>Encontremos el juego con el menor y mayor inventario.</p>
        `,
        sql: `SELECT MIN(existencias_inventario) as Minimo, MAX(existencias_inventario) as Maximo
FROM JUEGO;`,
        result: `
            <table>
                <thead>
                    <tr><th>Minimo</th><th>Maximo</th></tr>
                </thead>
                <tbody>
                    <tr><td>12</td><td>500</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "10. Having",
        content: `
            <p>La cláusula <code>HAVING</code> se usa para filtrar grupos creados por <code>GROUP BY</code> (donde <code>WHERE</code> no puede usarse).</p>
            <p>Mostremos las comunas que tienen más de 100 usuarios.</p>
        `,
        sql: `SELECT C.COMUNA, COUNT(*) as total_usuarios
FROM USUARIO U
JOIN COMUNA_BARRIO C ON U.COMUNA_BARRIO_id = C.id
GROUP BY C.COMUNA
HAVING total_usuarios > 100;`,
        result: `
            <table>
                <thead>
                    <tr><th>COMUNA</th><th>total_usuarios</th></tr>
                </thead>
                <tbody>
                    <tr><td>Poblado</td><td>120</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "11. Inner Join",
        content: `
            <p><code>INNER JOIN</code> devuelve registros que tienen valores coincidentes en ambas tablas.</p>
            <p>Listemos los usuarios y el nombre de su barrio.</p>
        `,
        sql: `SELECT U.primer_nombre, U.primer_apellido, B.barrio
FROM USUARIO U
INNER JOIN COMUNA_BARRIO B ON U.COMUNA_BARRIO_id = B.id;`,
        result: `
            <table>
                <thead>
                    <tr><th>primer_nombre</th><th>primer_apellido</th><th>barrio</th></tr>
                </thead>
                <tbody>
                    <tr><td>Juan</td><td>Perez</td><td>Manila</td></tr>
                    <tr><td>Maria</td><td>Gomez</td><td>Estadio</td></tr>
                    <tr><td>Carlos</td><td>Ruiz</td><td>Rosales</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "12. Left Join",
        content: `
            <p><code>LEFT JOIN</code> devuelve todos los registros de la tabla izquierda, y los coincidentes de la derecha.</p>
            <p>Listemos todos los juegos y sus trofeos (si tienen).</p>
        `,
        sql: `SELECT J.nombre, L.nombre as trofeo
FROM JUEGO J
LEFT JOIN LOGRO_TROFEO L ON J.id = L.JUEGO_id;`,
        result: `
            <table>
                <thead>
                    <tr><th>nombre</th><th>trofeo</th></tr>
                </thead>
                <tbody>
                    <tr><td>League of Legends</td><td>Pentakill</td></tr>
                    <tr><td>League of Legends</td><td>First Blood</td></tr>
                    <tr><td>FIFA 24</td><td><i>NULL</i></td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "13. Right Join",
        content: `
            <p><code>RIGHT JOIN</code> devuelve todos los registros de la tabla derecha, y los coincidentes de la izquierda.</p>
            <p>Es menos común, pero útil. Aquí listamos todas las plataformas y los juegos asociados.</p>
        `,
        sql: `SELECT J.nombre as juego, P.nombre as plataforma
FROM JUEGO J
RIGHT JOIN PLATAFORMA P ON J.PLATAFORMA_id = P.id;`,
        result: `
            <table>
                <thead>
                    <tr><th>juego</th><th>plataforma</th></tr>
                </thead>
                <tbody>
                    <tr><td>League of Legends</td><td>PC</td></tr>
                    <tr><td>God of War</td><td>PlayStation 5</td></tr>
                    <tr><td><i>NULL</i></td><td>Xbox Series X</td></tr>
                </tbody>
            </table>
        `
    }
];

let currentSlideIndex = 0;

function init() {
    renderSidebar();
    renderSlide(currentSlideIndex);
    updateControls();

    // Event Listeners
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}

function renderSidebar() {
    const list = document.getElementById('topicList');
    list.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const item = document.createElement('div');
        item.className = `topic-item ${index === currentSlideIndex ? 'active' : ''}`;
        item.innerText = slide.title;
        item.onclick = () => {
            currentSlideIndex = index;
            renderSlide(index);
            updateControls();
            if (window.innerWidth <= 768) toggleSidebar();
        };
        list.appendChild(item);
    });
}

function renderSlide(index) {
    const container = document.getElementById('slideContainer');
    const slideData = slides[index];
    
    // Update Title
    document.getElementById('pageTitle').innerText = slideData.title;
    
    // Update Progress
    document.getElementById('slideCounter').innerText = `${index + 1} / ${slides.length}`;
    const progressPercent = ((index + 1) / slides.length) * 100;
    document.getElementById('progressBar').style.width = `${progressPercent}%`;

    // Build HTML
    let html = `
        <div class="slide active">
            <div class="card">
                <div class="card-header">
                    <h2>${slideData.title}</h2>
                </div>
                <div class="card-content">
                    ${slideData.content}
                    
                    ${slideData.sql ? `
                        <div class="code-block">
                            <span class="code-label">SQL Input</span>
                            <pre><code>${highlightSQL(slideData.sql)}</code></pre>
                        </div>
                    ` : ''}
                    
                    ${slideData.result ? `
                        <h3>Resultado:</h3>
                        <div class="data-table-container">
                            ${slideData.result}
                        </div>
                    ` : ''}
                </div>
    `;
    
    // Add navigation buttons inside the card for better UX on mobile
    if (index === 0) {
        html += `
                <div class="card-actions" style="padding: 16px 24px;">
                    <button class="btn btn-contained" onclick="nextSlide()">Comenzar <span class="material-icons">arrow_forward</span></button>
                </div>
        `;
    }
    
    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;
    
    // Update sidebar active state
    const items = document.querySelectorAll('.topic-item');
    items.forEach(item => item.classList.remove('active'));
    if(items[index]) items[index].classList.add('active');
}

function updateControls() {
    document.getElementById('prevBtn').disabled = currentSlideIndex === 0;
    document.getElementById('nextBtn').disabled = currentSlideIndex === slides.length - 1;
}

function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        renderSlide(currentSlideIndex);
        updateControls();
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide(currentSlideIndex);
        updateControls();
    }
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}

function highlightSQL(sql) {
    // Simple syntax highlighter for SQL
    const keywords = ['SELECT', 'FROM', 'WHERE', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'DROP', 'TABLE', 'ALTER', 'ADD', 'COLUMN', 'GROUP BY', 'ORDER BY', 'HAVING', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'ON', 'AS', 'AND', 'OR', 'NOT', 'NULL', 'IS', 'BETWEEN', 'MIN', 'MAX', 'COUNT'];
    
    let highlighted = sql.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Strings
    highlighted = highlighted.replace(/'([^']*)'/g, '<span class="sql-string">\'$1\'</span>');
    
    // Keywords
    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlighted = highlighted.replace(regex, `<span class="sql-keyword">${keyword}</span>`);
    });
    
    // Numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="sql-number">$1</span>');
    
    return highlighted;
}

// Initialize app
document.addEventListener('DOMContentLoaded', init);
