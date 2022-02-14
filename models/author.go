package models

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"gorm.io/gorm"
)

// var validate = validator.New()

type Author struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
}

func CreateAuthor(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var author Author
	json.NewDecoder(r.Body).Decode(&author)
	var check_author Author
	DB.Table("authors").Where("name = ?", author.Name).Scan(&check_author)
	//DB.Table("users").Where("username=?, password=?",user.username, user.password).
	fmt.Printf("%#v\n", check_author)

	if check_author.Name == "" {
		DB.Create(&author)
		fmt.Fprintln(w, "new user created")
		json.NewEncoder(w).Encode(author)
	} else {
		fmt.Fprintln(w, "user already exist")
	}

	//	json.NewEncoder(w).Encode(author)

	// if err != nil {
	// 		panic(err)
	// 	 }

	// fmt.Printf("%#v\n", DB.Where(author.Name).Take(&Author{}))
	// if err != nil{
	// 	if DB.Where(author.Name).Take(Author{}).Error != nil {
	// 	fmt.Fprintln(w, "data already there")
	// 	}
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Printf("%#v\n", DB.Where(author.Name).Take(&Author{}).Error)
	// fmt.Printf("%#v\n", DB.Where(author.Name).Take(&Author{}))
	// if DB.Where(author.Name).Take(&Author{}).Error != nil {
	// // }
	//	DB.Create(&author)

}

func GetAuthors(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "applciation/json")
	var authors []Author
	DB.Find(&authors)
	json.NewEncoder(w).Encode(authors)
}

func GetAuthor(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "applcation/json")
	params := mux.Vars(r)
	var author Author
	DB.First(&author, params["id"])
	json.NewEncoder(w).Encode(author)
}

func UpdateAuthor(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "applcation/json")
	var author Author
	params := mux.Vars(r)
	DB.First(&author, params["id"])
	json.NewDecoder(r.Body).Decode(&author)
	DB.Save(&author)
	json.NewEncoder(w).Encode(author)
}

func DeleteAuthor(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "applcation/json")
	params := mux.Vars(r)
	var author Author
	DB.Delete(&author, params["id"])
	json.NewEncoder(w).Encode("The Author Has been successfully deleted")
}

// const DNS = "root:@tcp(127.0.0.1:3306)/phpmyadmin?parseTime=true"

// func init() {
//	DB, err = gorm.Open(mysql.Open(DNS), &gorm.Config{})
// 	if err != nil {
// 		fmt.Println(err.Error())
// 		panic("Cannot Connect TO the Database")
// 	}
// 	models.InitialMigration()
// 	DB = models.GetDB()
// 	DB.AutoMigrate(&Author{})
// }

// func (author *Author) validate() error {
// 	err := validate.Struct(author)
// 	if err != nil {
// 		if _, ok := err.(*validator.InvalidValidationError); ok {
// 			return err
// 		}
// 		return err
// 	}
// 	return nil
// }
