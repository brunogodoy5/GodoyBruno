let estado = {
    dados1: [],
    dados2: [],
    dadosListos: { equipo1: false, equipo2: false },
    totalDados1: 0,
    totalDados2: 0,
    equipo1: [],
    equipo2: [],
    atk1: 0,
    def1: 0,
    atk2: 0,
    def2: 0,
    daño1: 0,
    daño2: 0
  };
  
  async function obtenerPokemonAleatorio() {
    const id = Math.floor(Math.random() * 151) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
      nombre: data.name,
      ataque: data.stats.find(s => s.stat.name === "attack").base_stat,
      defensa: data.stats.find(s => s.stat.name === "defense").base_stat,
      imagen: data.sprites.front_default
    };
  }
  
  function capitalizar(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }
  
  function tirarDados() {
    return [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
  }
  
  function tirarDadosEquipo(equipo) {
    const dados = tirarDados();
    const total = dados.reduce((a, b) => a + b, 0);
  
    // Asignamos los dados a los equipos
    if (equipo === 1) {
      estado.dados1 = dados;
      estado.totalDados1 = total;
      estado.dadosListos.equipo1 = true;
      document.getElementById("dado1").disabled = true; 
    } else {
      estado.dados2 = dados;
      estado.totalDados2 = total;
      estado.dadosListos.equipo2 = true;
      document.getElementById("dado2").disabled = true; 
    }
  
    // Mostrar el resultado de los dados
    document.getElementById("resultado").innerHTML += `
      <p>Equipo ${equipo} tiró dados: 🎲 ${dados.join(" + ")} = ${total}</p>
    `;
  
    // Verificamos si ambos equipos ya tiraron los dados
    if (estado.dadosListos.equipo1 && estado.dadosListos.equipo2) {
      document.getElementById("pelear").disabled = false;  // Habilitamos el botón para pelear
    }
  }
  
  async function generarEquipos() {
    const pokemones = await Promise.all(Array.from({ length: 6 }, obtenerPokemonAleatorio));
    estado.equipo1 = pokemones.slice(0, 3);
    estado.equipo2 = pokemones.slice(3);
  
    estado.atk1 = estado.equipo1.reduce((s, p) => s + p.ataque, 0);
    estado.def1 = estado.equipo1.reduce((s, p) => s + p.defensa, 0);
    estado.atk2 = estado.equipo2.reduce((s, p) => s + p.ataque, 0);
    estado.def2 = estado.equipo2.reduce((s, p) => s + p.defensa, 0);
  
    estado.daño1 = Math.max(0, estado.atk1 - estado.def2);
    estado.daño2 = Math.max(0, estado.atk2 - estado.def1);
  
    let resultado = '';
    if (estado.daño1 > estado.daño2) {
      resultado = "🏆 ¡Equipo 1 gana!";
    } else if (estado.daño2 > estado.daño1) {
      resultado = "🏆 ¡Equipo 2 gana!";
    } else {
      if (estado.totalDados1 > estado.totalDados2) {
        resultado = "🎲 ¡Empate en daño, pero gana el Equipo 1 por dados!";
      } else if (estado.totalDados2 > estado.totalDados1) {
        resultado = "🎲 ¡Empate en daño, pero gana el Equipo 2 por dados!";
      } else {
        resultado = "😮 ¡Empate total, ni los dados decidieron!";
      }
    }
  
    let equiposHTML = `
      <h2>Equipo 1</h2>
      <div class="team">
        ${estado.equipo1.map(p => `
          <div class="pokemon">
            <img src="${p.imagen}" alt="${p.nombre}">
            <p><strong>${capitalizar(p.nombre)}</strong><br>ATK: ${p.ataque} | DEF: ${p.defensa}</p>
          </div>`).join("")}
      </div>
      <h2>Equipo 2</h2>
      <div class="team">
        ${estado.equipo2.map(p => `
          <div class="pokemon">
            <img src="${p.imagen}" alt="${p.nombre}">
            <p><strong>${capitalizar(p.nombre)}</strong><br>ATK: ${p.ataque} | DEF: ${p.defensa}</p>
          </div>`).join("")}
      </div>
      <div class="winner">
        <p><strong>Ataques y Defensas Totales:</strong></p>
        <p>Equipo 1 ➤ ATK: ${estado.atk1} | DEF: ${estado.def1} → Daño: ${estado.daño1}</p>
        <p>Equipo 2 ➤ ATK: ${estado.atk2} | DEF: ${estado.def2} → Daño: ${estado.daño2}</p>
        <p>Dados Equipo 1: ${estado.dados1.join(" + ")} = ${estado.totalDados1}</p>
        <p>Dados Equipo 2: ${estado.dados2.join(" + ")} = ${estado.totalDados2}</p>
        <h2>${resultado}</h2>
      </div>
    `;
  
    document.getElementById("resultado").innerHTML = equiposHTML;
  
    // Desactivar el botón de pelear después de la pelea
    document.getElementById("pelear").disabled = true;
  }
  