package com.doordash.onlineOrder.service;

import com.doordash.onlineOrder.dao.CustomerDao;
import com.doordash.onlineOrder.entity.Cart;
import com.doordash.onlineOrder.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final CustomerDao customerDao;

    @Autowired
    public CustomerService(CustomerDao customerDao) {
        this.customerDao= customerDao;
    }

    public void signUp(Customer customer) {
        Cart cart = new Cart();
        customer.setCart(cart);

        customer.setEnabled(true);
        customerDao.signUp(customer);

    }

    public Customer getCustomer(String email) {
        return customerDao.getCustomer(email);
    }
}

