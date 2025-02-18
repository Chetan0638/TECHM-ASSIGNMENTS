package com.examples;

public class itemBean {
    private String itemName;
    private int quantity;

    public itemBean(String itemName, int quantity) {
        this.itemName = itemName;
        this.quantity = quantity;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void displayValues() {
        System.out.println("Item Name: " + itemName);
        System.out.println("Quantity: " + quantity);
    }
}


