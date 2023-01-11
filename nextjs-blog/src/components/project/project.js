//Project Class
//Model class to create instances of projects


class Project {

    constructor(type,width,length,description) {
      this.type = type;
      this.width = width;
      this.length = length;
      this.description = description;
    }

    getType() {
        return this.type;
    }
    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length;
    }
    getDescription() {
        return this.description;
    }


  }