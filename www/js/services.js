angular.module('starter.services', [])

    .factory('Mountains', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var mountains = [{
        id: 1,
        name: 'Abao',
        location: 'Ifugao',
        coordinates: '16°50′00″N 120°55′00″E',
        region: 'CAR',
        masl: 2527,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 2,
        name: 'Abunug',
        location: 'Southern Leyte',
        coordinates: '11°02′00″N 124°42′00″E',
        region: 8,
        masl: 600,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 3,
        name: 'Agad-Agad',
        location: 'Lanao del Norte',
        coordinates: '8°10′46″N 124°17′24″E',
        region: 10,
        masl: 0,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 4,
        name: 'Agamomata',
        location: 'Apayao',
        coordinates: '18°09′17″N 120°58′04″E',
        region: 'CAR',
        masl: 1554,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 5,
        name: 'Aganmala',
        location: 'Ilocos Norte',
        coordinates: '18°15′39″N 120°53′56″E',
        region: 'CAR',
        masl: 1786,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 6,
        name: 'Agtuuganon',
        location: 'Davao Oriental',
        coordinates: '7°46′53″N 126°12′21″E',
        region: 11,
        masl: 1652,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 7,
        name: 'Aja',
        location: 'Nueva Ecija',
        coordinates: '15°47′57″N 121°08′00″E',
        region: 3,
        masl: 463,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 8,
        name: 'Akir-akir Volcano',
        location: 'Maguindanao',
        coordinates: '7°25′16″N 124°25′27″E',
        region: 'ARMM',
        masl: 526,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 9,
        name: 'Alal',
        location: 'TEXT',
        coordinates: 'TEXT',
        region: 'CAR',
        masl: 2663,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 10,
        name: 'Alanib',
        location: 'Bukidnon',
        coordinates: '8°08′09″N 124°55′45″E',
        region: 10,
        masl: 2626,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 11,
        name: 'Alchan',
        location: 'Kalinga',
        coordinates: '17°15′05″N 120°58′05″E',
        region: 'CAR',
        masl: 2617,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 12,
        name: 'Alto Peak',
        location: 'Leyte',
        coordinates: '11°06′17″N 124°44′30″E',
        region: 8,
        masl: 1303,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 13,
        name: 'Amanayao',
        location: 'Benguet[',
        coordinates: 'TEXT',
        region: 'CAR',
        masl: 'TEXT',
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 14,
        name: 'Ampalanag',
        location: 'Mountain Province',
        coordinates: 'TEXT',
        region: 'CAR',
        masl: 1714,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 15,
        name: 'Amuyao',
        location: 'Mountain Province',
        coordinates: 'TEXT',
        region: 'CAR',
        masl: 2701,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 16,
        name: 'Ambalatungan',
        location: 'Kalinga',
        coordinates: '17°19′00″N 121°06′00″E',
        region: 'CAR',
        masl: 2329,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 17,
        name: 'Amicay',
        location: 'Bohol',
        coordinates: '9°46′00″N 124°16′00″E',
        region: 7,
        masl: 'TEXT',
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 18,
        name: 'Amorong',
        location: 'Pangasinan',
        coordinates: '15°50′16″N 120°48′23″E',
        region: 1,
        masl: 376,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 19,
        name: 'Ampalauag',
        location: 'Ifugao',
        coordinates: '17°01′43″N 121°17′56″E',
        region: 'CAR',
        masl: 1714,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }, {
        id: 20,
        name: 'Ampaoid',
        location: 'Zamboanga del Norte',
        coordinates: '7°55′00″N 125°40′40″E',
        region: 9,
        masl: 1066,
        difficulty_scale: 'TBA',
        difficulty_class: 'TBA',
        trail_class: 'TBA',
        hours_to_summit: 'TBA',
        days_required: 'TBA',
        face: 'img/mtn.png'
      }];

      return {
        all: function() {
          return mountains;
        },
        remove: function(mountain) {
          mountains.splice(mountains.indexOf(mountain), 1);
        },
        get: function(mountainId) {
          for (var i = 0; i < mountains.length; i++) {
            if (mountains[i].id === parseInt(mountainId)) {
              return mountains[i];
            }
          }
          return null;
        }
      };
    });
