let input = require('readline-sync')
console.log('Welcome to "S3 Rastarunt" Dewas (M.P)');
console.log(' 1) Monday \n 2) Tuesday \n 3) Wednesday \n 4) Thursday \n 5) Friday \n 6) Saturday \n 7) Sunday');
let day = input.question('Enter day :-')
if (day == 'Monday'){
    console.log('Dear Customer In Monday Spacial What you Want ');
    console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
   let choice = input.questionInt('Enter choice :-')
    if (choice == 1) {
            console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Poha \n 2) Jalebi');
            console.log('What you want ');
            let item = input.questionInt('Enter item :-')
            if (item == 1 ) {
                    console.log('Dear Customer , Thankyou for ordering Poha');
                    console.log('In this order you have still two choices Like \n 1) Half Plate Poha ( Rate :- 15rs) \n 2) Full Plate Poha ( Rate :- 30rs) :-');
                let order = input.questionInt('Final Order ;- ')
                if (order == 1 ) {
                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Poha \n');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 15 rs ')
                }else if (order == 2){
                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Poha \n');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 30 rs ')
                }else{
                    console.log('Please Select Vailid Order');
                }
            }else if (item == 2){
                console.log('Dear Customer , Thankyou for ordering Jalebi');
                console.log('In this order you have still two choices Like \n 1) Half Plate jalebi ( Rate :- 50rs) \n 2) Full Plate jalebi ( Rate :- 100rs) :-');
                let order = input.questionInt('Final Order ;- ')
                if (order == 1 ) {
                    console.log('Your Order Has Been Confirmed \n Your order is Half plate jalebi');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 50 rs ')
                }else if (order == 2){
                    console.log('Your Order Has Been Confirmed \n Your order is Full plate jalebi');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 100 rs ')
                }else{
                    console.log('Please Select Vailid Order');
                }
            }else{
                console.log('Please Select Vailid Item');
            }
        }else if (choice == 2){
            console.log('Dear Customer In Lunch we have 2 Item like \n 1) Dal bati churma \n 2) Rajma chawal');
            console.log('What you want ');
            let item = input.questionInt('Enter item :-')
            if (item == 1 ) {
                    console.log('Dear Customer , Thankyou for ordering Dal bati churma');
                    console.log('In this order you have still two choices Like \n 1) Half Plate Dal bati churma ( Rate :- 150rs) \n 2) Full Plate Dal bati churma ( Rate :- 300rs) :-');
                let order = input.questionInt('Final Order ;- ')
                if (order == 1 ) {
                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal bati churma \n');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 150 rs ')
                }else if (order == 2){
                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Dal bati churma \n');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 300 rs ')
                }else{
                    console.log('Please Select Vailid Order');
                }
            }else if (item == 2){
                console.log('Dear Customer , Thankyou for ordering Rajma Chawal');
                console.log('In this order you have still two choices Like \n 1) Half Plate Rajma Chawal ( Rate :- 75 rs) \n 2) Full Plate Rajma Chawal ( Rate :- 150 rs) :-');
                let order = input.questionInt('Final Order ;- ')
                if (order == 1 ) {
                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Rajma Chawal');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 75 rs ')
                }else if (order == 2){
                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Rajma Chawal');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 150 rs ')
                }else{
                    console.log('Please Select Vailid Order');
                }
            }else{
                console.log('Please Select Vailid Item');
            }
        }else if (choice == 3){
            console.log('Dear Customer In Dinner we have 2 Item like \n 1) Butter Roti + Paneer Tikka \n 2) Plane roti + Matar Paneer ');
            console.log('What you want ');
            let item = input.questionInt('Enter item :-')
            if (item == 1 ) {
                    console.log('Dear Customer , Thankyou for ordering Butter Roti + Paneer Tikka');
                    console.log('In this order you have still two choices Like \n 1) Half Plate Butter Roti + Paneer Tikka ( Rate :- 180rs) \n 2) Full Plate Butter Roti + Paneer Tikka ( Rate :- 360rs) :-');
                let order = input.questionInt('Final Order ;- ')
                if (order == 1 ) {
                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Butter Roti + Paneer Tikka \n');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 180 rs ')
                }else if (order == 2){
                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Butter Roti + Paneer Tikka \n');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 360 rs ')
                }else{
                    console.log('Please Select Vailid Order');
                }
            }else if (item == 2){
                console.log('Dear Customer , Thankyou for ordering Plane roti + Matar Paneer');
                console.log('In this order you have still two choices Like \n 1) Half Plate Plane roti + Matar Paneer ( Rate :- 120 rs) \n 2) Full Plate Plane roti + Matar Paneer ( Rate :- 240 rs) :-');
                let order = input.questionInt('Final Order ;- ')
                if (order == 1 ) {
                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Plane roti + Matar Paneer');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 120 rs ')
                }else if (order == 2){
                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Plane roti + Matar Paneer');
                    console.log('Dear Customer, Thankyou for Order ');
                    console.log('Your Bill Amount is 240 rs ')
                }else{
                    console.log('Please Select Vailid Order');
                }
            }else{
                console.log('Please Select Vailid Item');
            }
        }else{
            console.log('Please Select Vailid Choice What you Want');
        }
    }else if (day == 'Tuesday'){
        console.log('Dear Customer In Tuesday Spacial What you Want ');
        console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
       let choice = input.questionInt('Enter choice :-')
        if (choice == 1) {
                console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Dhokla \n 2) Idli');
                console.log('What you want ');
                let item = input.questionInt('Enter item :-')
                if (item == 1 ) {
                        console.log('Dear Customer , Thankyou for ordering Dhokla');
                        console.log('In this order you have still two choices Like \n 1) Half Plate Dhokla ( Rate :- 20rs) \n 2) Full Plate Dhokla ( Rate :- 40rs) :-');
                    let order = input.questionInt('Final Order ;- ')
                    if (order == 1 ) {
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Dhokla \n');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 20 rs ')
                    }else if (order == 2){
                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Dhokla \n');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 40 rs ')
                    }else{
                        console.log('Please Select Vailid Order');
                    }
                }else if (item == 2){
                    console.log('Dear Customer , Thankyou for ordering Idli');
                    console.log('In this order you have still two choices Like \n 1) Half Plate Idli ( Rate :- 20rs) \n 2) Full Plate Idli ( Rate :- 50 rs) :-');
                    let order = input.questionInt('Final Order ;- ')
                    if (order == 1 ) {
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Idli');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 25 rs ')
                    }else if (order == 2){
                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Idli');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 50 rs ')
                    }else{
                        console.log('Please Select Vailid Order');
                    }
                }else{
                    console.log('Please Select Vailid Item');
                }
            }else if (choice == 2){
                console.log('Dear Customer In Lunch we have 2 Item like \n 1) Dal Chawal \n 2) Shahi Korma ');
                console.log('What you want ');
                let item = input.questionInt('Enter item :-')
                if (item == 1 ) {
                        console.log('Dear Customer , Thankyou for ordering Dal Chawal');
                        console.log('In this order you have still two choices Like \n 1) Half Plate Dal Chawal ( Rate :- 100rs) \n 2) Full Plate Dal Chawal ( Rate :- 200rs) :-');
                    let order = input.questionInt('Final Order ;- ')
                    if (order == 1 ) {
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Chawal\n');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 100 rs ')
                    }else if (order == 2){
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Chawal \n');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 200 rs ')
                    }else{
                        console.log('Please Select Vailid Order');
                    }
                }else if (item == 2){
                    console.log('Dear Customer , Thankyou for ordering Shahi Korma');
                    console.log('In this order you have still two choices Like \n 1) Half Plate Shahi Korma ( Rate :- 75 rs) \n 2) Full Plate Shahi Korma ( Rate :- 150 rs) :-');
                    let order = input.questionInt('Final Order ;- ')
                    if (order == 1 ) {
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Shahi Korma');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 75 rs ')
                    }else if (order == 2){
                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Shahi Korma');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 150 rs ')
                    }else{
                        console.log('Please Select Vailid Order');
                    }
                }else{
                    console.log('Please Select Vailid Item');
                }
            }else if (choice == 3){
                console.log('Dear Customer In Dinner we have 2 Item like \n 1) Paneer Masala \n 2) Paneer Biryani ');
                console.log('What you want ');
                let item = input.questionInt('Enter item :-')
                if (item == 1 ) {
                        console.log('Dear Customer , Thankyou for ordering Paneer Masala');
                        console.log('In this order you have still two choices Like \n 1) Half Plate Paneer Masala ( Rate :- 180rs) \n 2) Full Plate Paneer Masala ( Rate :- 360rs) :-');
                    let order = input.questionInt('Final Order ;- ')
                    if (order == 1 ) {
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Paneer Masala \n');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 180 rs ')
                    }else if (order == 2){
                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Paneer Masala \n');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 360 rs ')
                    }else{
                        console.log('Please Select Vailid Order');
                    }
                }else if (item == 2){
                    console.log('Dear Customer , Thankyou for ordering Paneer Biryani');
                    console.log('In this order you have still two choices Like \n 1) Half Plate Paneer Biryani ( Rate :- 120 rs) \n 2) Full Plate Paneer Biryani ( Rate :- 240 rs) :-');
                    let order = input.questionInt('Final Order ;- ')
                    if (order == 1 ) {
                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Paneer Biryani');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 120 rs ')
                    }else if (order == 2){
                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Paneer Biryani');
                        console.log('Dear Customer, Thankyou for Order ');
                        console.log('Your Bill Amount is 240 rs ')
                    }else{
                        console.log('Please Select Vailid Order');
                    }
                }else{
                    console.log('Please Select Vailid Item');
                }
            }else{
                console.log('Please Select Vailid Choice What you Want');
            }
        }else if (day == 'Wednesday'){
            console.log('Dear Customer In Wednesday Spacial What you Want ');
            console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
           let choice = input.questionInt('Enter choice :-')
            if (choice == 1) {
                    console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Pasta \n 2) Maggi');
                    console.log('What you want ');
                    let item = input.questionInt('Enter item :-')
                    if (item == 1 ) {
                            console.log('Dear Customer , Thankyou for ordering Pasta');
                            console.log('In this order you have still two choices Like \n 1) Half Plate Pasta ( Rate :- 15 rs) \n 2) Full Plate Pasta ( Rate :- 30 rs) :-');
                        let order = input.questionInt('Final Order ;- ')
                        if (order == 1 ) {
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Pasta \n');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 15 rs ')
                        }else if (order == 2){
                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Pasta \n');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 30 rs ')
                        }else{
                            console.log('Please Select Vailid Order');
                        }
                    }else if (item == 2){
                        console.log('Dear Customer , Thankyou for ordering Maggi');
                        console.log('In this order you have still two choices Like \n 1) Half Plate Maggi ( Rate :- 20rs) \n 2) Full Plate Maggi ( Rate :- 50 rs) :-');
                        let order = input.questionInt('Final Order ;- ')
                        if (order == 1 ) {
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Maggi');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 30 rs ')
                        }else if (order == 2){
                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Maggi');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 60 rs ')
                        }else{
                            console.log('Please Select Vailid Order');
                        }
                    }else{
                        console.log('Please Select Vailid Item');
                    }
                }else if (choice == 2){
                    console.log('Dear Customer In Lunch we have 2 Item like \n 1) Dal Chawal \n 2) Kadhi Chawal ');
                    console.log('What you want ');
                    let item = input.questionInt('Enter item :-')
                    if (item == 1 ) {
                            console.log('Dear Customer , Thankyou for ordering Dal Chawal');
                            console.log('In this order you have still two choices Like \n 1) Half Plate Dal Chawal ( Rate :- 100rs) \n 2) Full Plate Dal Chawal ( Rate :- 200rs) :-');
                        let order = input.questionInt('Final Order ;- ')
                        if (order == 1 ) {
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Chawal\n');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 100 rs ')
                        }else if (order == 2){
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Chawal \n');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 200 rs ')
                        }else{
                            console.log('Please Select Vailid Order');
                        }
                    }else if (item == 2){
                        console.log('Dear Customer , Thankyou for ordering Kadhi Chawal');
                        console.log('In this order you have still two choices Like \n 1) Half Plate Kadhi Chawal ( Rate :- 125 rs) \n 2) Full Plate Kadhi Chawal ( Rate :- 250 rs) :-');
                        let order = input.questionInt('Final Order ;- ')
                        if (order == 1 ) {
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Kadhi Chawal');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 125 rs ')
                        }else if (order == 2){
                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Kadhi Chawal');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 250 rs ')
                        }else{
                            console.log('Please Select Vailid Order');
                        }
                    }else{
                        console.log('Please Select Vailid Item');
                    }
                }else if (choice == 3){
                    console.log('Dear Customer In Dinner we have 2 Item like \n 1) Chana Masala \n 2) Aalu Poodi ');
                    console.log('What you want ');
                    let item = input.questionInt('Enter item :-')
                    if (item == 1 ) {
                            console.log('Dear Customer , Thankyou for ordering Chana Masala');
                            console.log('In this order you have still two choices Like \n 1) Half Plate Chana Masala ( Rate :- 150rs) \n 2) Full Plate Chana Masala ( Rate :- 300rs) :-');
                        let order = input.questionInt('Final Order ;- ')
                        if (order == 1 ) {
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Chana Masala \n');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 150 rs ')
                        }else if (order == 2){
                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Chana Masala \n');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 300 rs ')
                        }else{
                            console.log('Please Select Vailid Order');
                        }
                    }else if (item == 2){
                        console.log('Dear Customer , Thankyou for ordering Aalu Poodi');
                        console.log('In this order you have still two choices Like \n 1) Half Plate Aalu Poodi ( Rate :- 130 rs) \n 2) Full Plate Aalu Poodi ( Rate :- 260 rs) :-');
                        let order = input.questionInt('Final Order ;- ')
                        if (order == 1 ) {
                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Aalu Poodi');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 130 rs ')
                        }else if (order == 2){
                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Aalu Poodi');
                            console.log('Dear Customer, Thankyou for Order ');
                            console.log('Your Bill Amount is 260 rs ')
                        }else{
                            console.log('Please Select Vailid Order');
                        }
                    }else{
                        console.log('Please Select Vailid Item');
                    }
                }else{
                    console.log('Please Select Vailid Choice What you Want');
                }
            }else if (day == 'Thursday'){
                console.log('Dear Customer In Thursday Spacial What you Want ');
                console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
               let choice = input.questionInt('Enter choice :-')
                if (choice == 1) {
                        console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Sandwitch \n 2) Khichdi');
                        console.log('What you want ');
                        let item = input.questionInt('Enter item :-')
                        if (item == 1 ) {
                                console.log('Dear Customer , Thankyou for ordering Sandwitch');
                                console.log('In this order you have still two choices Like \n 1) Half Sandwitch ( Rate :- 45 rs) \n 2) Full Sandwitch ( Rate :- 90 rs) :-');
                            let order = input.questionInt('Final Order ;- ')
                            if (order == 1 ) {
                                console.log('Your Order Has Been Confirmed \n Your order is Half Sandwitch \n');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 45 rs ')
                            }else if (order == 2){
                                console.log('Your Order Has Been Confirmed \n Your order is Full Sandwitch \n');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 90 rs ')
                            }else{
                                console.log('Please Select Vailid Order');
                            }
                        }else if (item == 2){
                            console.log('Dear Customer , Thankyou for ordering Khichdi');
                            console.log('In this order you have still two choices Like \n 1) Half Plate Khichdi ( Rate :- 30rs) \n 2) Full Plate Khichdi ( Rate :- 60 rs) :-');
                            let order = input.questionInt('Final Order ;- ')
                            if (order == 1 ) {
                                console.log('Your Order Has Been Confirmed \n Your order is Half plate Khichdi');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 30 rs ')
                            }else if (order == 2){
                                console.log('Your Order Has Been Confirmed \n Your order is Full plate Khichdi');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 60 rs ')
                            }else{
                                console.log('Please Select Vailid Order');
                            }
                        }else{
                            console.log('Please Select Vailid Item');
                        }
                    }else if (choice == 2){
                        console.log('Dear Customer In Lunch we have 2 Item like \n 1) Dal Makhani \n 2) Pav Bhaji ');
                        console.log('What you want ');
                        let item = input.questionInt('Enter item :-')
                        if (item == 1 ) {
                                console.log('Dear Customer , Thankyou for ordering Dal Makhani');
                                console.log('In this order you have still two choices Like \n 1) Half Plate Dal Makhani ( Rate :- 80rs) \n 2) Full Plate Dal Makhani ( Rate :- 160rs) :-');
                            let order = input.questionInt('Final Order ;- ')
                            if (order == 1 ) {
                                console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Makhani\n');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 80 rs ')
                            }else if (order == 2){
                                console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Makhani \n');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 160 rs ')
                            }else{
                                console.log('Please Select Vailid Order');
                            }
                        }else if (item == 2){
                            console.log('Dear Customer , Thankyou for ordering Kadhi Chawal');
                            console.log('In this order you have still two choices Like \n 1) Half Plate Pav Bhaji ( Rate :- 50 rs) \n 2) Full Plate Pav Bhaji ( Rate :- 100 rs) :-');
                            let order = input.questionInt('Final Order ;- ')
                            if (order == 1 ) {
                                console.log('Your Order Has Been Confirmed \n Your order is Half plate Pav Bhaji');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 50 rs ')
                            }else if (order == 2){
                                console.log('Your Order Has Been Confirmed \n Your order is Full plate  Pav Bhaji');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 100 rs ')
                            }else{
                                console.log('Please Select Vailid Order');
                            }
                        }else{
                            console.log('Please Select Vailid Item');
                        }
                    }else if (choice == 3){
                        console.log('Dear Customer In Dinner we have 2 Item like \n 1) Palak Paneer \n 2) Kadai Paneer ');
                        console.log('What you want ');
                        let item = input.questionInt('Enter item :-')
                        if (item == 1 ) {
                                console.log('Dear Customer , Thankyou for ordering Palak Paneer');
                                console.log('In this order you have still two choices Like \n 1) Half Plate Palak Paneer ( Rate :- 170rs) \n 2) Full Plate Palak Paneer ( Rate :- 340rs) :-');
                            let order = input.questionInt('Final Order ;- ')
                            if (order == 1 ) {
                                console.log('Your Order Has Been Confirmed \n Your order is Half plate Palak Paneer \n');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 170 rs ')
                            }else if (order == 2){
                                console.log('Your Order Has Been Confirmed \n Your order is Full plate Palak Paneer \n');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 340 rs ')
                            }else{
                                console.log('Please Select Vailid Order');
                            }
                        }else if (item == 2){
                            console.log('Dear Customer , Thankyou for ordering Kadai Paneer');
                            console.log('In this order you have still two choices Like \n 1) Half Plate Kadai Paneer ( Rate :- 180 rs) \n 2) Full Plate Kadai Paneer ( Rate :- 360 rs) :-');
                            let order = input.questionInt('Final Order ;- ')
                            if (order == 1 ) {
                                console.log('Your Order Has Been Confirmed \n Your order is Half plate Kadai Paneer');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 180 rs ')
                            }else if (order == 2){
                                console.log('Your Order Has Been Confirmed \n Your order is Full plate Kadai Paneer');
                                console.log('Dear Customer, Thankyou for Order ');
                                console.log('Your Bill Amount is 360 rs ')
                            }else{
                                console.log('Please Select Vailid Order');
                            }
                        }else{
                            console.log('Please Select Vailid Item');
                        }
                    }else{
                        console.log('Please Select Vailid Choice What you Want');
                    }
                }else if (day == 'Friday'){
                    console.log('Dear Customer In Friday Spacial What you Want ');
                    console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
                   let choice = input.questionInt('Enter choice :-')
                    if (choice == 1) {
                            console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Sabudana Khichdi \n 2) Halwa');
                            console.log('What you want ');
                            let item = input.questionInt('Enter item :-')
                            if (item == 1 ) {
                                    console.log('Dear Customer , Thankyou for ordering Sabudana Khichdi');
                                    console.log('In this order you have still two choices Like \n 1) Half plate Sabudana Khichdi ( Rate :- 40 rs) \n 2) Full plate Sabudana Khichdi ( Rate :- 80 rs) :-');
                                let order = input.questionInt('Final Order ;- ')
                                if (order == 1 ) {
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Sabudana Khichdi \n');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 40 rs ')
                                }else if (order == 2){
                                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Sabudana Khichdi \n');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 80 rs ')
                                }else{
                                    console.log('Please Select Vailid Order');
                                }
                            }else if (item == 2){
                                console.log('Dear Customer , Thankyou for ordering Halwa');
                                console.log('In this order you have still two choices Like \n 1) Half Plate Halwa ( Rate :- 60  rs) \n 2) Full Plate Halwa ( Rate :- 120 rs) :-');
                                let order = input.questionInt('Final Order ;- ')
                                if (order == 1 ) {
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Halwa');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 60 rs ')
                                }else if (order == 2){
                                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Halwa');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 120 rs ')
                                }else{
                                    console.log('Please Select Vailid Order');
                                }
                            }else{
                                console.log('Please Select Vailid Item');
                            }
                        }else if (choice == 2){
                            console.log('Dear Customer In Lunch we have 2 Item like \n 1) Aalu matar \n 2) Chhole Chawal ');
                            console.log('What you want ');
                            let item = input.questionInt('Enter item :-')
                            if (item == 1 ) {
                                    console.log('Dear Customer , Thankyou for ordering Aalu matar');
                                    console.log('In this order you have still two choices Like \n 1) Half Plate Aalu matar ( Rate :- 100rs) \n 2) Full Plate Aalu matar ( Rate :- 200rs) :-');
                                let order = input.questionInt('Final Order ;- ')
                                if (order == 1 ) {
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Aalu matar\n');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 100 rs ')
                                }else if (order == 2){
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Aalu matar \n');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 200 rs ')
                                }else{
                                    console.log('Please Select Vailid Order');
                                }
                            }else if (item == 2){
                                console.log('Dear Customer , Thankyou for ordering Chhole Chawal');
                                console.log('In this order you have still two choices Like \n 1) Half Plate Chhole Chawal ( Rate :- 90 rs) \n 2) Full Plate Chhole Chawal ( Rate :- 180 rs) :-');
                                let order = input.questionInt('Final Order ;- ')
                                if (order == 1 ) {
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Chhole Chawal');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 90 rs ')
                                }else if (order == 2){
                                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Chhole Chawal');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 180 rs ')
                                }else{
                                    console.log('Please Select Vailid Order');
                                }
                            }else{
                                console.log('Please Select Vailid Item');
                            }
                        }else if (choice == 3){
                            console.log('Dear Customer In Dinner we have 2 Item like \n 1) Chhole Bhature \n 2) Sweet rice ');
                            console.log('What you want ');
                            let item = input.questionInt('Enter item :-')
                            if (item == 1 ) {
                                    console.log('Dear Customer , Thankyou for ordering Chhole Bhature');
                                    console.log('In this order you have still two choices Like \n 1) Half Plate Chhole Bhature ( Rate :- 120rs) \n 2) Full Plate Chhole Bhature ( Rate :- 240rs) :-');
                                let order = input.questionInt('Final Order ;- ')
                                if (order == 1 ) {
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Chhole Bhature \n');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 120 rs ')
                                }else if (order == 2){
                                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Chhole Bhature \n');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 240 rs ')
                                }else{
                                    console.log('Please Select Vailid Order');
                                }
                            }else if (item == 2){
                                console.log('Dear Customer , Thankyou for ordering Sweet rice ');
                                console.log('In this order you have still two choices Like \n 1) Half Plate Sweet rice  ( Rate :- 60 rs) \n 2) Full Plate Sweet rice  ( Rate :- 130 rs) :-');
                                let order = input.questionInt('Final Order ;- ')
                                if (order == 1 ) {
                                    console.log('Your Order Has Been Confirmed \n Your order is Half plate Sweet rice ');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 60 rs ')
                                }else if (order == 2){
                                    console.log('Your Order Has Been Confirmed \n Your order is Full plate Sweet rice ');
                                    console.log('Dear Customer, Thankyou for Order ');
                                    console.log('Your Bill Amount is 120 rs ')
                                }else{
                                    console.log('Please Select Vailid Order');
                                }
                            }else{
                                console.log('Please Select Vailid Item');
                            }
                        }else{
                            console.log('Please Select Vailid Choice What you Want');
                        }
                    }else if (day == 'Saturday'){
                        console.log('Dear Customer In Saturday Spacial What you Want ');
                        console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
                       let choice = input.questionInt('Enter choice :-')
                        if (choice == 1) {
                                console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Samosa  \n 2) Kachori');
                                console.log('What you want ');
                                let item = input.questionInt('Enter item :-')
                                if (item == 1 ) {
                                        console.log('Dear Customer , Thankyou for ordering Samosa');
                                        console.log('In this order you have still two choices Like \n 1) Samosa One Piece ( Rate :- 40 rs) \n 2) Samosa Two Piece ( Rate :- 80 rs) :-');
                                    let order = input.questionInt('Final Order ;- ')
                                    if (order == 1 ) {
                                        console.log('Your Order Has Been Confirmed \n Your order is Samosa One Piece \n');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 40 rs ')
                                    }else if (order == 2){
                                        console.log('Your Order Has Been Confirmed \n Your order is Samosa Two Piece \n');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 80 rs ')
                                    }else{
                                        console.log('Please Select Vailid Order');
                                    }
                                }else if (item == 2){
                                    console.log('Dear Customer , Thankyou for ordering Kachori');
                                    console.log('In this order you have still two choices Like \n 1) Kachori One Piece ( Rate :- 30  rs) \n 2) Kachori Two Piece ( Rate :- 60 rs) :-');
                                    let order = input.questionInt('Final Order ;- ')
                                    if (order == 1 ) {
                                        console.log('Your Order Has Been Confirmed \n Your order is Kachori One Piece');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 30 rs ')
                                    }else if (order == 2){
                                        console.log('Your Order Has Been Confirmed \n Your order is Kachori Two Piece');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 60 rs ')
                                    }else{
                                        console.log('Please Select Vailid Order');
                                    }
                                }else{
                                    console.log('Please Select Vailid Item');
                                }
                            }else if (choice == 2){
                                console.log('Dear Customer In Lunch we have 2 Item like \n 1) Dal Makhni \n 2) Chawal Kadhi ');
                                console.log('What you want ');
                                let item = input.questionInt('Enter item :-')
                                if (item == 1 ) {
                                        console.log('Dear Customer , Thankyou for ordering Dal Makhni');
                                        console.log('In this order you have still two choices Like \n 1) Half Plate Dal Makhni ( Rate :- 100rs) \n 2) Full Plate Dal Makhni ( Rate :- 200rs) :-');
                                    let order = input.questionInt('Final Order ;- ')
                                    if (order == 1 ) {
                                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Makhni\n');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 100 rs ')
                                    }else if (order == 2){
                                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Makhni \n');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 200 rs ')
                                    }else{
                                        console.log('Please Select Vailid Order');
                                    }
                                }else if (item == 2){
                                    console.log('Dear Customer , Thankyou for ordering Chawal Kadhi');
                                    console.log('In this order you have still two choices Like \n 1) Half Plate Chawal Kadhi ( Rate :- 90 rs) \n 2) Full Plate Chawal Kadhi ( Rate :- 180 rs) :-');
                                    let order = input.questionInt('Final Order ;- ')
                                    if (order == 1 ) {
                                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Chawal Kadhi');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 90 rs ')
                                    }else if (order == 2){
                                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Chawal Kadhi');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 180 rs ')
                                    }else{
                                        console.log('Please Select Vailid Order');
                                    }
                                }else{
                                    console.log('Please Select Vailid Item');
                                }
                            }else if (choice == 3){
                                console.log('Dear Customer In Dinner we have 2 Item like \n 1) Shahi Paneer \n 2) Kadai paneer ');
                                console.log('What you want ');
                                let item = input.questionInt('Enter item :-')
                                if (item == 1 ) {
                                        console.log('Dear Customer , Thankyou for ordering Shahi Paneer');
                                        console.log('In this order you have still two choices Like \n 1) Half Plate Shahi Paneer( Rate :- 120rs) \n 2) Full Plate Shahi Paneer( Rate :- 240rs) :-');
                                    let order = input.questionInt('Final Order ;- ')
                                    if (order == 1 ) {
                                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Shahi Paneer \n');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 120 rs ')
                                    }else if (order == 2){
                                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Shahi Paneer \n');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 240 rs ')
                                    }else{
                                        console.log('Please Select Vailid Order');
                                    }
                                }else if (item == 2){
                                    console.log('Dear Customer , Thankyou for ordering Kadai paneer ');
                                    console.log('In this order you have still two choices Like \n 1) Half Plate Kadai paneer ( Rate :- 110 rs) \n 2) Full Plate Kadai paneer  ( Rate :- 220 rs) :-');
                                    let order = input.questionInt('Final Order ;- ')
                                    if (order == 1 ) {
                                        console.log('Your Order Has Been Confirmed \n Your order is Half plate Kadai paneer ');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 110 rs ')
                                    }else if (order == 2){
                                        console.log('Your Order Has Been Confirmed \n Your order is Full plate Kadai paneer ');
                                        console.log('Dear Customer, Thankyou for Order ');
                                        console.log('Your Bill Amount is 220 rs ')
                                    }else{
                                        console.log('Please Select Vailid Order');
                                    }
                                }else{
                                    console.log('Please Select Vailid Item');
                                }
                            }else{
                                console.log('Please Select Vailid Choice What you Want');
                            }
                        }else if (day == 'Sunday'){
                            console.log('Dear Customer In Sunday Spacial What you Want ');
                            console.log(' 1) Breakfast \n 2) Lunch \n 3) Dinner');
                           let choice = input.questionInt('Enter choice :-')
                            if (choice == 1) {
                                    console.log('Dear Customer In Breakfast we have 2 Item like \n 1) Aalu Paratha  \n 2) Gobhi Paratha ');
                                    console.log('What you want ');
                                    let item = input.questionInt('Enter item :-')
                                    if (item == 1 ) {
                                            console.log('Dear Customer , Thankyou for ordering Aalu Paratha ');
                                            console.log('In this order you have still two choices Like \n 1) Half Plate Aalu Paratha  ( Rate :- 50rs) \n 2) SFull Plate Aalu Paratha  ( Rate :- 100 rs) :-');
                                        let order = input.questionInt('Final Order ;- ')
                                        if (order == 1 ) {
                                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Aalu Paratha  \n');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 40 rs ')
                                        }else if (order == 2){
                                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Aalu Paratha  \n');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 80 rs ')
                                        }else{
                                            console.log('Please Select Vailid Order');
                                        }
                                    }else if (item == 2){
                                        console.log('Dear Customer , Thankyou for ordering Gobhi Paratha');
                                        console.log('In this order you have still two choices Like \n 1) Half plate Gobhi Paratha ( Rate :- 30  rs) \n 2) Full Plate Gobhi Paratha ( Rate :- 60 rs) :-');
                                        let order = input.questionInt('Final Order ;- ')
                                        if (order == 1 ) {
                                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Gobhi Paratha');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 30 rs ')
                                        }else if (order == 2){
                                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Gobhi Paratha');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 60 rs ')
                                        }else{
                                            console.log('Please Select Vailid Order');
                                        }
                                    }else{
                                        console.log('Please Select Vailid Item');
                                    }
                                }else if (choice == 2){
                                    console.log('Dear Customer In Lunch we have 2 Item like \n 1) Dal Bati Churma \n 2) Laddu Bafle ');
                                    console.log('What you want ');
                                    let item = input.questionInt('Enter item :-')
                                    if (item == 1 ) {
                                            console.log('Dear Customer , Thankyou for ordering Dal Bati Churma');
                                            console.log('In this order you have still two choices Like \n 1) Half Plate Dal Bati Churma ( Rate :- 150rs) \n 2) Full Plate Dal Bati Churma ( Rate :- 300rs) :-');
                                        let order = input.questionInt('Final Order ;- ')
                                        if (order == 1 ) {
                                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Dal Bati Churma\n');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 150 rs ')
                                        }else if (order == 2){
                                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Dal Bati Churma \n');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 300 rs ')
                                        }else{
                                            console.log('Please Select Vailid Order');
                                        }
                                    }else if (item == 2){
                                        console.log('Dear Customer , Thankyou for ordering Laddu Bafle');
                                        console.log('In this order you have still two choices Like \n 1) Half Plate Laddu Bafle ( Rate :- 190 rs) \n 2) Full Plate Laddu Bafle ( Rate :- 380 rs) :-');
                                        let order = input.questionInt('Final Order ;- ')
                                        if (order == 1 ) {
                                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Laddu Bafle');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 190 rs ')
                                        }else if (order == 2){
                                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Laddu Bafle');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 380 rs ')
                                        }else{
                                            console.log('Please Select Vailid Order');
                                        }
                                    }else{
                                        console.log('Please Select Vailid Item');
                                    }
                                }else if (choice == 3){
                                    console.log('Dear Customer In Dinner we have 2 Item like \n 1) Shahi Paneer \n 2) Kadai paneer ');
                                    console.log('What you want ');
                                    let item = input.questionInt('Enter item :-')
                                    if (item == 1 ) {
                                            console.log('Dear Customer , Thankyou for ordering Shahi Paneer');
                                            console.log('In this order you have still two choices Like \n 1) Half Plate Shahi Paneer( Rate :- 120rs) \n 2) Full Plate Shahi Paneer( Rate :- 240rs) :-');
                                        let order = input.questionInt('Final Order ;- ')
                                        if (order == 1 ) {
                                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Shahi Paneer \n');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 120 rs ')
                                        }else if (order == 2){
                                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Shahi Paneer \n');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 240 rs ')
                                        }else{
                                            console.log('Please Select Vailid Order');
                                        }
                                    }else if (item == 2){
                                        console.log('Dear Customer , Thankyou for ordering Kadai paneer ');
                                        console.log('In this order you have still two choices Like \n 1) Half Plate Kadai paneer ( Rate :- 110 rs) \n 2) Full Plate Kadai paneer  ( Rate :- 220 rs) :-');
                                        let order = input.questionInt('Final Order ;- ')
                                        if (order == 1 ) {
                                            console.log('Your Order Has Been Confirmed \n Your order is Half plate Kadai paneer ');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 110 rs ')
                                        }else if (order == 2){
                                            console.log('Your Order Has Been Confirmed \n Your order is Full plate Kadai paneer ');
                                            console.log('Dear Customer, Thankyou for Order ');
                                            console.log('Your Bill Amount is 220 rs ')
                                        }else{
                                            console.log('Please Select Vailid Order');
                                        }
                                    }else{
                                        console.log('Please Select Vailid Item');
                                    }
                                }else{
                                    console.log('Please Select Vailid Choice What you Want');
                                }
                            }else{
                                console.log("Please Select Vailid Day's");
                            }