import F1Parser from './F1Parser';
import CarTelemetryData from './CarTelemetryData';

export default class PacketCarTelemetryData extends F1Parser {
  constructor(buffer) {
    super();
    this.endianess('little')
      .skip(21)
      .array('m_carTelemetryData', {
        length: 20,
        type: new CarTelemetryData(),
      })
      .uint32('m_buttonStatus');

    this.data = this.fromBuffer(buffer);
  }
}
