import java.util.LinkedList;

public class Instituto {

	public Curso[] cursos;

	// a) Escribir un método public int cantidadEstudiantes(char t, String d) que retorne la
	// cantidad de alumnos inscriptos para el turno t de los cursos con tipo de dictado igual a d.

	public int cantidadEstudiantes(char t, String d) {
		int cont = 0;
		for (Curso curso : cursos) {
			if (curso.turno == t && curso.tipoDictado.equals(d)) {
				cont += curso.estudiantes.length;
			}
		}
		return cont;
	}

	// b) Escribir un m´etodo public boolean problemas() que devuelve true si existe al menos un
	// alumno que no puede cursar en forma virtual (virtual==false) y el curso se dicta en forma
	// virtual o si existe al menos un docente que no tiene turno compatible con el turno del curso asignado.

	public boolean problemas() {
		for (Curso curso : cursos) {
			if (curso.tipoDictado.equals("presencial")) {
				for (Estudiante est : curso.estudiantes) {
					if (est.virtual) {
						return true;
					}
				}
				for (Docente doc : curso.docentes) {
					if (doc.turno != 'C' && curso.turno != doc.turno) {
						return true;
					}
				}
			}
		}
		return false;
	}

	// c) Escribir un método public LinkedList<Curso> cursoSabados(int n) que retorne
	// la lista con los cursos que tienen al menos n docentes que pueden dictar clases los
	// sábados y tales que ningún estudiante pueda cursar de manera virtual. La lista no
	// debe tener cursos repetidos.

	public LinkedList<Curso> cursoSabados(int n) {
		LinkedList<Curso> lista = new LinkedList<Curso>();
		for (Curso curso : this.cursos) {
			int cont = 0;
			boolean doc = false;
			boolean est = true;
			for (Docente docente : curso.docentes) {
				if (docente.sabado) {
					cont++;
				}
			}
			if (cont >= n) {
				doc = true;
			}
			for (Estudiante estudiante : curso.estudiantes) {
				if (estudiante.virtual) {
					est = false;
				}
			}
			if (doc && est && !lista.contains(curso)) {
				lista.add(curso);
			}
		}
		return lista;
	}
}
