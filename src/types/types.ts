const TYPES = {
    studentRepository: Symbol.for("StudentRepository"),
    standardRepository: Symbol.for("StandardRepository"),
    booksRepository: Symbol.for("BooksRepository"),
    booksInfoRepository: Symbol.for("BookTakenInfoRepository"),
    schoolsRepository: Symbol.for("SchoolRepository"),

    studentORMRepository: Symbol.for("StudentORMRepository"),
    standardORMRepository: Symbol.for("StandardORMRepository"),
    booksORMRepository: Symbol.for("BooksORMRepository"),
    booksInfoORMRepository: Symbol.for("BookTakenInfoORMRepository"),
    schoolsORMRepository: Symbol.for("SchoolORMRepository")

};
export default TYPES;