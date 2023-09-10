mi_funcion <- function() {}

roll <- function() {
  die <- 1:6
  dice <- sample(die, 2, TRUE)
  # la funcion siempre retorna la última linea
  sum(dice)
}
# ver código
#roll
# activar funcion
#roll()
roll2 <- function(bones) {
  dice <- sample(bones, 2, TRUE)
  sum(dice)
}
#roll2(1:100)

# parametros por defecto
roll3 <- function(bones = 1:6) {
  dice <- sample(bones, 2, TRUE)
  sum(dice)
}
roll3()
