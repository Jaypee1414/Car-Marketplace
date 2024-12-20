import { integer, json, pgTable, serial,varchar } from "drizzle-orm/pg-core";


// create table
export const carListing = pgTable('carList',
    {
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(), // not null -> required
    tagline: varchar('tagline'), //null -> not required
    originalPrice: varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    make: varchar('make').notNull(),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: varchar('mileage').notNull(),
    engineSize: varchar('engineSize'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    vin: varchar('vin'),
    offerType: varchar('offerType'),
    listingDescription: varchar('listingDescription').notNull(),
    features: json('features'),
    createdBy: varchar('createdBy').notNull(),
    posted: varchar('posted').notNull(),
    userName: varchar('userName').notNull().default('Jaypee'),
    userImageURL: varchar('userImageURL').notNull().default('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzOomwVW0wuNJ0bI5WWxyHibvhEoaa5fBcQ&usqp=CAU'),
    })

export const carImages = pgTable("carImages",{
    id: serial('id').primaryKey(),
    imageURL: varchar('images').notNull(),
    carListingId: integer('carListingId').notNull().references(()=>carListing.id)
})