package ports

type ApiPort interface {
	UploadFile(files map[string]interface{})
}
