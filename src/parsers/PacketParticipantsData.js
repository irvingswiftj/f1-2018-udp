import F1Parser from './F1Parser';
import ParticipantData from './ParticipantData';

export default class PacketParticipantsData extends F1Parser {
  constructor(buffer) {
    super();
    this.endianess('little')
      .skip(21)
      .uint8('m_numCars')
      .array('m_participants', {
        length: 20,
        type: new ParticipantData(),
      });

    this.data = this.fromBuffer(buffer);
  }
}
