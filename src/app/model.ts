export class ListaTareas {
  usuario: string;
  items: Array<Tarea>;
  constructor() {
      this.usuario = "Lasol";
      this.items = [
        new Tarea("Instalar un buen IDE", false),
        new Tarea("Aprender: HTML, JS y CSS", false),
        new Tarea("Instalar node (v LTS)", false),
        new Tarea("Usar npm para agregar dependencias", false),
        new Tarea("Instalar angular cli", false),
        new Tarea("Usar Angular cli", false),
        new Tarea("Aprender MVC", false),
        new Tarea("Aprender TypeScript", false)]
  }

  agregar(tarea){
    this.items.push(tarea);
  }
}
export class Tarea {
  nombre: string;
  estaTerminada: Boolean;
  constructor(nombre, estaTerminada) {
      this.nombre = nombre;
      this.estaTerminada = estaTerminada;
  }
}
