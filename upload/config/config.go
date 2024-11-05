package config

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/config"
)

func GetS3Config() config.Config {
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		panic(fmt.Sprintf("Unuable to load SDK config %v", err))
	}

	return cfg
}
