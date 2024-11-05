SERVICE_NAME=$1

protoc \
    --go_out=./golang \
    --go_opt=paths=source_relative \
    --go-grpc_out=./golang \
    --go-grpc_opt=paths=source_relative \
    ./${SERVICE_NAME}/${SERVICE_NAME}.proto

# cd golang/${SERVICE_NAME}


# go mod init \
#     github.com/EdCrux/streamplatform/${SERVICE_NAME}
# go mod tidy