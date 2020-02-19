class Animal {
  protected int legs;
  public void eat() {
    System.out.println("Animal eats");
  }
}

class Dog extends Animal {
  Dog() {
    legs = 4;
  }
}
