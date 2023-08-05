package main

import (
	"context"
	"encoding/json"
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

var userCollection = db().Database("goTest").Collection("Todo")

func getContents(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Get all contents")
}

func getContent(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Get a content")
}

func createContent(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json") // for adding       //Content-type
	var person Todo
	err := json.NewDecoder(r.Body).Decode(&person) // storing in person   //variable of type user
	if err != nil {
		fmt.Print(err)
	}
	insertResult, err := TodoCollection.InsertOne(context.Background(), person)
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(insertResult.InsertedID) // return the //mongodb ID of generated document
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

	http.HandleFunc("/todolist", getContents)
	http.HandleFunc("/todolist/", getContent)
	http.HandleFunc("/todolist/create", createContent)
	http.HandleFunc("/todolist/update/", updateContent)
	http.HandleFunc("/todolist/delete/", deleteContent)

	http.ListenAndServe(":8080", nil)
}
