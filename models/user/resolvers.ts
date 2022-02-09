import { Enum_StatusUsers } from "../enum/enum";
import { UserModel } from "./user";

const resolversUser = {
  Query: {
    Users: async (parent, args, context) => {
      // Consulta todos los usuarios de la base de datos
      const users = await UserModel.find();
      let arrayFilter = users.filter(
        (e) =>
          e.statusUser == Enum_StatusUsers.ACTIVO ||
          e.statusUser == Enum_StatusUsers.INACTIVO
      );
      console.log("arrayFilter: ", arrayFilter);
      //console.log("arrayFilter: ", arrayFilter);
      return arrayFilter;

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

  
    UsersById: async (parent, args) => {
      const arr = args['_id'];
      const list = await UserModel.find({ '_id': { $in: arr } });
      return list
    },
    
  },
  Mutation: {
    // Se debe llamar igual al items de la mutation en los type.ts
    createUser: async (parent, args) => {
      const userCreated = await UserModel.create({
        nameUser: args.nameUser,
        lastName: args.lastName,
        identification: args.identification,
        email: args.email,
        movil: args.movil,
        phone: args.phone,
        nationality: args.nationality,
        birthDay: args.birthDay,
        photo: args.photo,
        cityBirth: args.cityBirth,
        emergencyContact: args.emergencyContact,
        issuance: args.issuance,
        address: args.address,
        locality: args.locality,
        strata: args.strata,
        afp: args.afp,
        arl: args.arl,
        eps: args.eps,
        rh: args.rh,
        upz: args.upz,
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
          photo: args.photo,
          emergencyContact: args.emergencyContact,
          issuance: args.issuance,
          address: args.address,
          locality: args.locality,
          strata: args.strata,
          afp: args.afp,
          arl: args.arl,
          eps: args.eps,
          rh: args.rh,
          upz: args.upz,
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

    disableUser: async (parent, args) => {
      const userDisabled = await UserModel.findByIdAndUpdate(
        args._id,
        {
          statusUser: Enum_StatusUsers.OCULTO,
        },
        { new: true }
      );
      return userDisabled;
    },
  },
};

export { resolversUser };
