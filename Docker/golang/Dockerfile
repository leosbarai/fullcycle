FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY go.mod .
COPY main.go .

RUN go build -ldflags="-s -w" -o main .

FROM scratch

WORKDIR /app

COPY --from=builder /app/main .

CMD ["./main"]