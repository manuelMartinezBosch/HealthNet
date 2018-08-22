INSERT INTO ALIMENT(al_name, al_hydrates, al_proteins, al_fat, al_calcium)
    VALUES
        ('Pechuga de pollo', 10.2, 13.4, 2.2, 320),
        ('Brocoli', 10.2, 13.4, 2.2, 320),
        ('Pavo', 10.2, 13.4, 2.2, 320),
        ('Escarola', 10.2, 13.4, 2.2, 320),
        ('Manzana', 10.2, 13.4, 2.2, 320);

INSERT INTO USER(us_password, us_name, us_mail, us_age, us_weight, us_height)
    VALUES
        ('12345', 'Manuel Martinez', 'manuel@manuel.com', 24, 69, 170);

INSERT INTO MEAL_TYPE(mety_name) VALUES ('Desayuno');


INSERT INTO MEAL(us_id, mety_id, me_date)
    VALUES
        (1, 1, NOW());

INSERT INTO UNIT(un_name) VALUES ('Loncha');

INSERT INTO ALIMENT_UNIT(al_id, un_id, grams_per_unit)
    VALUES 
        (1, 1, 40),
        (2, 1, 20),
        (3, 1, 5),
        (4, 1, 10);

INSERT INTO MEAL_ALIMENT (al_id, me_id, quantity, un_id)
    VALUES (2, 1, 3, 1);

INSERT INTO RECIPE(us_id, re_name, re_person_quantity)
    VALUES 
        (1, 'Verduras con pollo', 4),
        (1, 'Verduras con pavo', 2);

INSERT INTO RECIPE_ALIMENT(al_id, re_id, quantity, un_id)
    VALUES 
        (1, 1, 2, 1),
        (2, 1, 1, 1),
        (4, 1, 3, 1),
        (3, 2, 2, 1),
        (4, 2, 2, 1);

INSERT INTO MEAL_RECIPE (me_id, re_id)
    VALUES 
        (1, 1),
        (1, 2);