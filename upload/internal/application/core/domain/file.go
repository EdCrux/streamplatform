package domain

type File struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Author      string `json:"author"`
	BucketUrl   string `json:"bucket_url"`
}
