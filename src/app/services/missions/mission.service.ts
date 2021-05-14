import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  urlMissions='http://127.0.0.1:8070/Mission'
  constructor(private Http: HttpClient) { }
  createMission(mission) // add a mission related to a client
  {
   
    return this.Http.post(this. urlMissions+'/addMission',mission);
  }
  getMissionById(id)
  {
    return this.Http.get(this.urlMissions +'/getMission/'+id);
  }
  deleteMission(id) {
    return this.Http.delete(this.urlMissions +'/deleteMission/'+id);
  }
  updateMission(mission) {
    return this.Http.put(this.urlMissions  + '/updateMission',mission);
  }  
}

