import { UserModel } from "./user";

const resolversUser = {
  Query: {
    Users: async (parent, args, context) => {
      // Consulta todos los usuarios de la base de datos

      const users = await UserModel.find();
      return users;

      /////////////////// AGRAGAR ESTE CODIGO PARA VALIDARCION DE ROLES DESDE EL BACK  /////////////
      // if(context.userData.rol === 'ADMINISTRADOR'){
      //   const users = await UserModel.find();
      //   return users;
      // }else{
      //   return null;
      // }

    },
    User: async (parent, args) => {
      const user = await UserModel.findOne({ _id: args._id });
      return user;
    },

  },
  Mutation: {
    // Se debe llamar igual al items de la mutation en los type.ts
    createUser: async (parent, args) => {
      console.log("arg: ", args)
      const userCreated = await UserModel.create({
        nameUser: args.nameUser,
        lastName: args.lastName,
        identification: args.identification,
        email: args.email,
        movil: args.movil,
        phone: args.phone,
        nationality: args.nationality,
        birthDay: args.birthDay,
        cityBirth: args.cityBirth,
        emergencyContact: args.emergencyContact,
        issuance: args.issuance,
        address: args.address,
        locality: args.locality,
        strata: args.strata,
        AFP: args.AFP,
        ARL: args.ARL,
        EPS: args.EPS,
        RH: args.RH,
        UPZ: args.UPZ,
        role: args.role,
        statusUser: args.statusUser,
        nameGuardian: args.nameGuardian,
        lastNameGuardian: args.lastNameGuardian,
        identificationGuardian: args.identificationGuardian,
        phoneGuardian: args.phoneGuardian,
        emailGuardian: args.emailGuardian,
        addressGuardian: args.addressGuardian,


      });
      // if (Object.keys(args).includes("status")) {
      //   userCreated.statusUser = args.status;
      // }
      return userCreated;
    },

    editUser: async (parent, args) => {
      const userEdited = await UserModel.findByIdAndUpdate(
        args._id,
        {
          nameUser: args.nameUser,
          lastName: args.lastName,
          identification: args.identification,
          email: args.email,
          movil: args.movil,
          phone: args.phone,
          nationality: args.nationality,
          birthDay: args.birthDay,
          cityBirth: args.cityBirth,
          emergencyContact: args.emergencyContact,
          issuance: args.issuance,
          address: args.address,
          locality: args.locality,
          strata: args.strata,
          AFP: args.AFP,
          ARL: args.ARL,
          EPS: args.EPS,
          RH: args.RH,
          UPZ: args.UPZ,
          role: args.role,
          statusUser: args.statusUser,
          nameGuardian: args.nameGuardian,
          lastNameGuardian: args.lastNameGuardian,
          identificationGuardian: args.identificationGuardian,
          phoneGuardian: args.phoneGuardian,
          emailGuardian: args.emailGuardian,
          addressGuardian: args.addressGuardian,
        },
        { new: true }
      );
      return userEdited;
    },

    deleteUser: async (parent, args) => {
      const userDeleted = await UserModel.findOneAndDelete({ _id: args._id });
        return userDeleted;
    },
  },
};

export { resolversUser };
