terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "hiya-pal" {
  name         = "mlydn/hiya-pal:latest"
  keep_locally = false
}

resource "docker_container" "hiya-pal" {
  image = docker_image.hiya-pal.latest
  name  = "hiya-pal"
  ports {
    internal = 8000
    external = 8000
  }
}
