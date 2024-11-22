import './m_home.css'

export default function M_home() {

    return (
        <div className="Home">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=, initial-scale=1.0" />
                <title>Document</title>
                <link rel="stylesheet" href="../css/style.css" />
            </head>
            <body class="container">
                <h1 class="title">hipervinculos</h1>
                <a href="https://fafadaloia.github.io/proyectos-Practicas-Profesionalizantes-2024/" className="link-item" target="_blank" rel="noopener noreferrer">
                    <div>
                        <h3>Prácticas profesionalizantes</h3>
                    </div>
                </a>
                <a href="/home/ds" class="link-item">
                    <div>
                        <h3>Desarrollo de Software</h3>
                    </div>
                </a>
            </body>
        </div>
    )
}