package bucket

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

type Adapter struct {
	S3Client *s3.Client
}

func NewAdapter(cfg config.Config) *Adapter {

	svc := s3.NewFromConfig(cfg.(aws.Config))
	return &Adapter{
		S3Client: svc,
	}
}

func (a Adapter) UploadFile(ctx context.Context, bucketName string, objectKey string) {
	fmt.Println("Upload file starts...")
}
