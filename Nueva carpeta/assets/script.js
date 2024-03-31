
    const listaDeTareas = document.querySelector("#tareas")
    const tareaInput = document.querySelector("#nuevaTarea")
    const btnAgregar = document.querySelector("#agregarTarea")
    const cuentaTareas = document.querySelector("#cuenta-tareas");

    const tareas = []
    let tareasRealizadas = 0; 
    let contador = 0;


    btnAgregar.addEventListener("click", () => {
        const tarea = tareaInput.value;
        contador++ ;
        tareas.push({ id: contador, tarea: tarea, realizada: false });
        tareaInput.value = "";
        renderList(tareas);
      });
      
    btnAgregar.style.background = "green";
    btnAgregar.style.color = "white";
    btnAgregar.style.border = "none";
    btnAgregar.style.padding = "5px 10px";
    btnAgregar.style.cursor = "pointer";

    tareaInput.style.width = "420px";

      function renderList(tareas) {
        let html = "";
        tareasRealizadas = 0;
        for (let tarea of tareas) {
            let estado = tarea.realizada ? "✅" : `<span class="sticker" onclick="marcarRealizada(${tarea.id})">✔️</span>`;
            let eliminar = tarea.realizada ? "" : `<span class="sticker" onclick="borrar(${tarea.id})">❌</span>`;
            html += `
            <li> ${tarea.id}. ${tarea.tarea} ${estado} ${eliminar}</li>
            `;
          if (tarea.realizada) {
            tareasRealizadas++;
          }
        }
        listaDeTareas.innerHTML = html;
        cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;
        document.getElementById("tareas-realizadas").textContent = `Tareas realizadas: ${tareasRealizadas}`;
      }
    

    
      function marcarRealizada(id) {
        const tarea = tareas.find(t => t.id === id);
        if (tarea) {
            tarea.realizada = true;
            renderList(tareas);
        }
    }
      
      
      function borrar(id) {
        const index = tareas.findIndex((ele) => ele.id == id);
        if (index !== -1) {
          if (tareas[index].realizada) {
            tareasRealizadas--;
          }
          tareas.splice(index, 1);
          renderList(tareas);
        }
      }
      
      btnBuscar.addEventListener("click", () => {
        const tareaBuscada = buscadorInput.value;
        const tareasFiltradas = tareas.filter((tarea) =>
          tarea.tarea.includes(tareaBuscada)
        );
        renderList(tareasFiltradas);
      });
