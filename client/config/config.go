package config

import (
	"log"
	"os"
)

func GetEnviromentByKey(key string) string {
	if key == "" {
		log.Fatalln("A key must be provided!")
	}
	return os.Getenv(key)
}
