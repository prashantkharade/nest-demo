// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
// import { Course } from './course.schema';

// export type UserDocument = HydratedDocument<User>;

// @Schema()
// export class User {
//   @Prop()
//   id: string;

//   @Prop()
//   name: string;

//   @Prop()
//   age: number;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop()
//   password: string;

//   @Prop()
//   confirmPassword: string;

//   @Prop()
//   role: string;

//   @Prop()
//   createdAt: Date;

//   @Prop()
//   updatedAt: Date;

//   @Prop()
//   deletedAt: Date;

//   @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] })
//   courses: Course[];
// }

// export const UserSchema = SchemaFactory.createForClass(User);
