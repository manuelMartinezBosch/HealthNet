INSERT INTO ALIMENT(al_name, al_hydrates, al_proteins, al_fat, al_calcium)
    VALUES
        ('Pechuga de pollo', 10.2, 13.4, 2.2, 320),
        ('Brocoli', 10.2, 13.4, 2.2, 320),
        ('Pavo', 10.2, 13.4, 2.2, 320),
        ('Escarola', 10.2, 13.4, 2.2, 320),
        ('Manzana', 10.2, 13.4, 2.2, 320)

INSERT INTO USER(us_password, us_name, us_mail, us_age, us_weight, us_height)
    VALUES
        ('12345', 'Manuel Martinez', 'manuel@manuel.com', 24, 69, 170)

INSERT INTO MEAL_TYPE(mety_name) VALUES ('Desayuno')


INSERT INTO MEAL(us_id, mety_id, me_date)
    VALUES
        (1, 1, NOW())

INSERT INTO UNIT(un_name) VALUES ('Loncha')

INSERT INTO ALIMENT_UNIT(al_id, un_id, grams_per_unit)
    VALUES (2, 1, 20)

INSERT INTO MEAL_ALIMENT (al_id, me_id, quantity, un_id)
    VALUES (2, 1, 3, 1)