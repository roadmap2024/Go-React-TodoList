package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Todo struct {
	ID      string `json:"id"`
	Content string `json:content`
}

func getContents(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Get all contents")
}

func getContent(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Get a content")
}

func createContent(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Create a content")
}

func updateContent(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Update a content")
}

func deleteContent(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Delete a content")
}

func main() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.Background(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Connected to MongoDB!")
	defer client.Disconnect(context.Background())

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})

	http.HandleFunc("/users", getContents)
	http.HandleFunc("/users/", getContent)
	http.HandleFunc("/users/create", createContent)
	http.HandleFunc("/users/update/", updateContent)
	http.HandleFunc("/users/delete/", deleteContent)

	http.ListenAndServe(":8080", nil)
}
